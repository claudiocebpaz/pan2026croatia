# 🔄 Uso Automático del Servidor MCP para Supabase

## 1. 🎯 Objetivo

Utilizar automáticamente el servidor MCP de Supabase para todas las interacciones con la base de datos, sin necesidad de solicitudes explícitas.

## 2. 📋 Reglas de Implementación

### 2.1. Operaciones de Base de Datos

- **Regla:** Siempre usar `use_mcp_tool` con el servidor `supabase` para:
  - Consultas SQL (`execute_sql`)
  - Migraciones (`apply_migration`)
  - Listado de tablas (`list_tables`)
  - Gestión de proyectos (`list_projects`, `get_project`)
  - Funciones edge (`list_edge_functions`, `deploy_edge_function`)

### 2.2. Ejemplos de Uso Automático

**✅ Correcto (Uso Automático):**

```typescript
// Al necesitar ejecutar SQL
<use_mcp_tool>
<server_name>supabase</server_name>
<tool_name>execute_sql</tool_name>
<arguments>
{
  "project_id": "proyecto-id",
  "query": "SELECT * FROM contact_messages"
}
</arguments>
</use_mcp_tool>
```

**❌ Incorrecto (No usar):**

```typescript
// Evitar implementaciones manuales de cliente Supabase
// cuando el servidor MCP está disponible
const { data, error } = await supabase.from("table").select("*");
```

### 2.3. Prioridad de Herramientas MCP

**Orden de Preferencia:**

1. `use_mcp_tool` con servidor `supabase` (PRIMERA OPCIÓN)
2. Cliente Supabase directo (SOLO si MCP no está disponible)

### 2.4. Casos de Uso Específicos

#### Consultas de Datos

```typescript
// ✅ Automático con MCP
<use_mcp_tool>
<server_name>supabase</server_name>
<tool_name>execute_sql</tool_name>
<arguments>
{
  "project_id": "proyecto-actual",
  "query": "SELECT * FROM users WHERE active = true"
}
</arguments>
</use_mcp_tool>
```

#### Migraciones de Base de Datos

```typescript
// ✅ Automático con MCP
<use_mcp_tool>
<server_name>supabase</server_name>
<tool_name>apply_migration</tool_name>
<arguments>
{
  "project_id": "proyecto-actual",
  "name": "add_user_preferences",
  "query": "ALTER TABLE users ADD COLUMN preferences JSONB"
}
</arguments>
</use_mcp_tool>
```

#### Gestión de Proyectos

```typescript
// ✅ Automático con MCP
<use_mcp_tool>
  <server_name>supabase</server_name>
  <tool_name>list_projects</tool_name>
  <arguments>{}</arguments>
</use_mcp_tool>
```

### 2.5. Excepciones

**Casos donde NO aplicar esta regla:**

- Cuando el servidor MCP de Supabase no esté disponible
- Para operaciones que requieran autenticación de usuario en tiempo real
- En componentes del frontend que necesiten interactividad inmediata

## 3. 🔍 Verificación de Disponibilidad

Antes de usar cualquier herramienta MCP, verificar que el servidor esté conectado:

```typescript
// Verificar disponibilidad implícita
// Si el servidor no responde, fallback a cliente tradicional
```

## 4. 📚 Beneficios del Enfoque MCP

- **Consistencia:** Todas las operaciones siguen el mismo patrón
- **Seguridad:** Validación centralizada de consultas
- **Mantenibilidad:** Código más limpio y organizado
- **Escalabilidad:** Fácil migración entre entornos

---

_Última actualización: 24/09/2025 - Implementación automática de MCP para Supabase_
