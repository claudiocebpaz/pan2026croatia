# System Architecture

## Component Structure

- Home: Hero video, About, DJs, Schedule preview
- Program: Full event timeline
- Rooms: Accommodation options and booking
- Shared components: Nav, Footer

## Data Flow

- JSON files for static content (Events.json, CastleShared.json)
- React components for UI presentation
- Vite for optimized asset loading

## Performance Patterns

### Scroll Optimization

- **Throttling**: Scroll events throttled to 100ms intervals
- **State Management**: Custom hooks for scroll visibility and active path detection
- **Performance**: Minimal state updates with 5px scroll delta threshold

### Navigation Patterns

- **Active Page Detection**: Route-based highlighting with aria-current attributes
- **Accessibility**: ARIA labels and keyboard navigation support
- **Responsive**: Mobile-first approach with optimized touch interactions
