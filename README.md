# ElementInjector Demo

This is an example of the ElementInjector at work in Angular. It has the following structure:

* `FlowerService` provided in `root`, as well as in the `ChildComponent`
* `AnimalService` provided in `@Component()` decorators
* Three components: `AppComponent`, `ChildComponent`, `ChildComponent`

Notice that when you provide either of these services in the component, that the value in the component is the one Angular will use. It'll never see either the value in the `ModuleInjector`, nor the value in the parent component (ElementInjector) if there's a value provided in the current component.

## Modifying visibility

Try using the visibility modifiers, `@Self()`, `@SkipSelf()`, `@Optional()`, and `@Host()` in the `constructor()` (where the services are injected), to see how they modify the starting and stopping locations.

