isModifiedAction
------

Github Action to filter the push commit modifications

### Usage

```
action "isProfileFileModified" {
  uses = "zhigang1992/ismodifiedaction@master"
  args = "packages/projectA packages/projectFileB firebase/firebase.json"
}
```

> `packages/projectA packages/projectFileB firebase/firebase.json` will be used as array of prefix check.
> It will match stuffs like `packages/projectA/abc`, ``packages/projectA/asdf/adsfad.json`
