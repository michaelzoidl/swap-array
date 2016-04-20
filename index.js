export default (Arr, Caller, Target) => {
  let Instance = Arr.constructor();
  let Stash = Arr;

  let InstanceType = Array.isArray(Instance) ? 'array' : typeof Instance;

  // Check types and throw err if no arr is passed
  if(InstanceType !== 'array') throw '[ERR] SwapArray expects a array as first param';

  // Copy the Arr-Content into new Instance - so we don't overwrite the passed array
  Stash.map((s, i) => Instance[i] = s);

  // Update indexes
  Instance[Caller] = Instance.splice(Target, 1, Instance[Caller])[0];

  return Instance;
}
