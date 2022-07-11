# Contributing

The BLUI Lab is a great place for experimental additions.  This guide discusses where new items should be placed, tested, and documented.

### Location

The BLUI Lab source code folder can be located in `src/lab`.  It is currently sub-divided to support `components`, `directives`, `pipes`, & `services`.  To get started, place your addition in the correct subfolder.


### Building the Lab

To test that the code compiles, run `yarn start`.  This will run the demo application as well as recompile all the source code found in the `src/lab` folder.

### Demo Integration

Additions to the BLUI Lab should be integrated into the demo application; this guarentees that the new code will run within the context of a full application.
To add your code to the demo application, see `src/app` and create some form of integration.

For components, this is best done by adding the component on the screen in a handful of states.

For services, it is recommended to add unit tests to check the functionality.  

### Documentation

To keep track of what is inside of the BLUI Lab, please provide a new entry in the [BLUI Lab Docs](`./docs/README.md`).  
New components should include a more extensive document that discusses a component's `@Inputs` & `@Outputs` as well as a code sample for how to get started. See the [PasswordStrengthChecker](`./docs/PasswordStrengthChecker.md`) documentation for an example.


### Testing

Testing is not required for entries in the BLUI Lab since entries are accepted as-is, but they are encouraged.  Our CI/CD Pipeline will run unit tests to help guarentee nothing breaks when new elements are added.


### Pull Requests

For new additions to the BLUI Lab, open a Pull Request [here](https://github.com/brightlayer-ui/angular-blui-lab/pulls).
