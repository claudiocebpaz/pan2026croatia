# Makefile para gestión de códigos de acceso (siempre 4 caracteres)
SUPABASE_URL := https://wnodqskgwavruorxatcn.functions.supabase.co
ENDPOINT := $(SUPABASE_URL)/generate-codes
AUTH_HEADER := "Authorization: Bearer $(shell grep VITE_SUPABASE_ANON_KEY .env.local | cut -d '=' -f2)"

.PHONY: help generate-codes generate-one deploy

help:
	@echo "Comandos disponibles:"
	@echo "  make help       - Muestra esta ayuda"
	@echo "  make generate-one - Genera un solo código de 4 caracteres"
	@echo "  make generate-codes - Genera 10 códigos de 4 caracteres"
	@echo "  make deploy [MSG=\"mensaje\"] - Commit, push y build de verificación"
	@echo ""
	@echo "Opciones avanzadas:"
	@echo "  make generate-codes numCodes=5 - Genera 5 códigos de 4 caracteres"

generate-one:
	@curl -s -X POST \
		-H "Content-Type: application/json" \
		-H $(AUTH_HEADER) \
		-d '{"numCodes":1}' \
		$(ENDPOINT) | jq -r '.codes[0].code'

generate-codes:
	@echo "Usando AUTH_HEADER=$(AUTH_HEADER)"
	@curl -i -X POST \
		-H "Content-Type: application/json" \
		-H $(AUTH_HEADER) \
		-d '{"numCodes":$(if $(numCodes),$(numCodes),10)}' \
		$(ENDPOINT)

# Mensaje de commit personalizable. Puedes llamar como:
#   make deploy MSG="feat: nuevo copy en Home"
MSG ?= chore(deploy): actualización $(shell date -u +"%Y-%m-%d %H:%M:%S UTC")

deploy:
	@echo "==> Iniciando deploy"
	@if [ -z "$$(${SHELL} -lc 'git status --porcelain')" ]; then \
		echo "==> No hay cambios para commitear"; \
	else \
		echo "==> Agregando cambios"; \
		git add -A; \
		echo "==> Creando commit: $(MSG)"; \
		git commit -m "$(MSG)"; \
	fi
	@echo "==> Haciendo push"
	@git push
	@echo "==> Ejecutando build local (verificación Cloudflare)"
	@npm run build || (echo "ERROR: la compilación local falló. Revisa los logs arriba y la configuración de Cloudflare." >&2; exit 1)
	@echo "==> Build OK. Listo para Cloudflare."
