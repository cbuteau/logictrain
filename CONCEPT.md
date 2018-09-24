
# Concept

The idea is that the web is the ultimate platform.
With Javascript being everywhere.

The next phase will be the construction of logical units of execution.

Each logictrain would start with a REST exposure.
A call would contain a data package with parameters and a REST callback URL.

This would allow people to build functional units that performed a certain task.

As it evolved the endpoint could have state complexity and possibly scripting.

Use the jsigs package to validate a dynamically loaded package for dispatching.

ensure all the apis exist and they have the right parameters.

```javascript
var signature = {
  configuration: function(api) {},
  intitialize: function(options) {},
  run_or_think: function()
}
```

# Future


There needs to be an API for registering API versions and reminding users to upgrade.

```javascript
function (api)

  var version = api.version('1.0');
  version.login(parametersSchema, function());

```

# State Machine

The idea is there are workhorses that chew data and there are state machines that coordinate the work.

File format...

The defintions define the children relationships and the transitions.
The Structure defines how all the instances of the

```json
{
  "definitions": [
    {
      "name": "stateName",
      "children": [],
      "transitions": []
    }
  ],
  "structure": {
    "stateName": {

    }
  }
}
```

# Links

[The Node Support List](http://node.green/)
