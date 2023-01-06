# Contributing

The BLUI Lab is a great place for experimental additions.  This guide discusses where new items should be placed, tested, and documented.

### Requirements

In order to contribute elements to the BLUI Lab, these requirements must be met: 

- Any code that is contributed into the Brightlayer UI Lab becomes open to the public.  All contributions must be void of Copyright. 
- Any components that are contributed must be built on top of Material UI.  In the context of angular, they must use Angular Material & not an alternative design system such as Bootstrap.
- Any additional modules or components must be accompanied by a `README`.

### New Code Location

The BLUI Lab source code can be located in `src/lab`.  It is currently sub-divided to support `components`, `directives`, `pipes`, & `services`.  To get started, place your addition in the correct subfolder and export it using the closest `index.ts`.

### Building the Lab

To test that the code compiles, run `yarn start`.  This will run the demo application as well as recompile all the source code found in the `src/lab` folder when changes are made. 

### Demo Integration

Additions to the BLUI Lab should be integrated into the demo application; this guarentees that the new code will run within the context of a full application.
To add your code to the demo application, see `src/app` and create some form of integration.

For components, this is best done by adding the component to the UI in a way that demonstrates it working. 

For services, it is recommended to add unit tests to check the functionality.  

### Documentation

To keep track of what is inside of the BLUI Lab, please provide a new entry in the [BLUI Lab Docs](`./docs/README.md`).  
New components should include a more extensive document that discusses a component's `@Inputs` & `@Outputs` as well as a code sample for how to get started. See the [PasswordStrengthChecker](`./docs/PasswordStrengthChecker.md`) documentation for a component docs example.


### Testing

Testing is not required for entries in the BLUI Lab since entries are accepted as-is, but they are encouraged.  Our CI/CD pipeline will run unit tests to check that nothing breaks when new elements are added.

### Themes

If you are developing a component, check out the `lab/themes` folder when adding a theme for light and dark modes.  Right now are themes only support `blue` and `blueDark` themes, so the lab has mixins to support these two themes.

### Pull Requests

For new additions to the BLUI Lab, open a Pull Request [here](https://github.com/etn-ccis/blui-angular-blui-lab/pulls).  


