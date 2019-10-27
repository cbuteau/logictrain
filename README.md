
Read configuration file and put a REST endpoint up with parameter validation.

Run tests against server.

Design constructs

IF OR TEST

WHILE

ITERATE

Take a list and dispatch it...

CODE

The code segments will be all a function dowork(data) which passes in a data argument.
The editor will just show

dowork(data) without letting them edit it.

Special functions will exist like clone() or cloneAndMerge(ref, newopts)


DATA

Data will be a multiple variable decalration editor...with allowing complex objects to be defined.

CONFIG

Configuration object.
Used with data to achieve parameters.

TRANSFORM
data transformation types.
merge.
split.


EXECUTE

This is a webservice execution expect it to be made of configuration and code.


```plantuml
[*] --> TEST
TEST --> ITERATE
ITERATE --> EXECUTE
EXECUTE : executes logic for
EXECUTE : this is another string
TEST --> EXECUTE_ERROR
```
