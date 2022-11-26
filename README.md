## The Error

It fails around 60th file on my machine. Of course, increased memory would fix it, but only temporarily.

```
yarn run v1.22.19
$ rollup -c --configPlugin typescript

src/1.ts → dist...
created dist in 329ms

src/2.ts → dist...
created dist in 279ms

src/3.ts → dist...
created dist in 287ms

src/4.ts → dist...
created dist in 250ms

src/5.ts → dist...
created dist in 255ms

src/6.ts → dist...
created dist in 298ms

src/7.ts → dist...
created dist in 383ms

src/8.ts → dist...
created dist in 321ms

src/9.ts → dist...
created dist in 280ms

src/10.ts → dist...
created dist in 272ms

src/11.ts → dist...
created dist in 358ms

src/12.ts → dist...
created dist in 254ms

src/13.ts → dist...
created dist in 261ms

src/14.ts → dist...
created dist in 293ms

src/15.ts → dist...
created dist in 315ms

src/16.ts → dist...
created dist in 357ms

src/17.ts → dist...
created dist in 260ms

src/18.ts → dist...
created dist in 257ms

src/19.ts → dist...
created dist in 272ms

src/20.ts → dist...
created dist in 270ms

src/21.ts → dist...
created dist in 258ms

src/22.ts → dist...
created dist in 487ms

src/23.ts → dist...
created dist in 304ms

src/24.ts → dist...
created dist in 258ms

src/25.ts → dist...
created dist in 264ms

src/26.ts → dist...
created dist in 247ms

src/27.ts → dist...
created dist in 357ms

src/28.ts → dist...
created dist in 291ms

src/29.ts → dist...
created dist in 245ms

src/30.ts → dist...
created dist in 267ms

src/31.ts → dist...
created dist in 261ms

src/32.ts → dist...
created dist in 303ms

src/33.ts → dist...
created dist in 513ms

src/34.ts → dist...
created dist in 275ms

src/35.ts → dist...
created dist in 246ms

src/36.ts → dist...
created dist in 266ms

src/37.ts → dist...
created dist in 227ms

src/38.ts → dist...
created dist in 254ms

src/39.ts → dist...
created dist in 291ms

src/40.ts → dist...
created dist in 326ms

src/41.ts → dist...
created dist in 298ms

src/42.ts → dist...
created dist in 250ms

src/43.ts → dist...
created dist in 258ms

src/44.ts → dist...
created dist in 232ms

src/45.ts → dist...
created dist in 241ms

src/46.ts → dist...
created dist in 345ms

src/47.ts → dist...
created dist in 656ms

src/48.ts → dist...
created dist in 340ms

src/49.ts → dist...
created dist in 290ms

src/50.ts → dist...
created dist in 278ms

src/51.ts → dist...
created dist in 231ms

src/52.ts → dist...
created dist in 247ms

src/53.ts → dist...
created dist in 252ms

src/54.ts → dist...
created dist in 248ms

src/55.ts → dist...
created dist in 980ms

src/56.ts → dist...
created dist in 385ms

src/57.ts → dist...
created dist in 320ms

src/58.ts → dist...
created dist in 254ms

src/59.ts → dist...
created dist in 328ms

src/60.ts → dist...
created dist in 1.4s

src/61.ts → dist...
created dist in 705ms

src/62.ts → dist...
created dist in 1.3s

src/63.ts → dist...
created dist in 901ms

src/64.ts → dist...
created dist in 1.2s

src/65.ts → dist...
created dist in 2.5s

src/66.ts → dist...

<--- Last few GCs --->

[21248:0000019C0C1B2FC0]    32256 ms: Mark-sweep (reduce) 2043.5 (2081.7) -> 2043.2 (2082.5) MB, 955.0 / 0.0 ms  (average mu = 0.130, current mu = 0.020) allocation failure; scavenge might not succeed
[21248:0000019C0C1B2FC0]    33259 ms: Mark-sweep (reduce) 2044.4 (2082.5) -> 2043.9 (2083.2) MB, 992.2 / 0.0 ms  (average mu = 0.070, current mu = 0.010) allocation failure; scavenge might not succeed


<--- JS stacktrace --->

FATAL ERROR: Reached heap limit Allocation failed - JavaScript heap out of memory
 1: 00007FF68247FEEF node_api_throw_syntax_error+206383
 2: 00007FF6823FFBD6 v8::base::CPU::num_virtual_address_bits+63814
 3: 00007FF682400F42 v8::base::CPU::num_virtual_address_bits+68786
 4: 00007FF682EA03B4 v8::Isolate::ReportExternalAllocationLimitReached+116
 5: 00007FF682E8B722 v8::Isolate::Exit+674
 6: 00007FF682D0D77C v8::internal::EmbedderStackStateScope::ExplicitScopeForTesting+124
 7: 00007FF682D0A99B v8::internal::Heap::CollectGarbage+3963
 8: 00007FF682D20BD3 v8::internal::HeapAllocator::AllocateRawWithLightRetrySlowPath+2099
 9: 00007FF682D2147D v8::internal::HeapAllocator::AllocateRawWithRetryOrFailSlowPath+93
10: 00007FF682D30CB3 v8::internal::Factory::NewFillerObject+851
11: 00007FF682A223E5 v8::internal::DateCache::Weekday+1349
12: 00007FF682F3DA41 v8::internal::SetupIsolateDelegate::SetupHeap+558193
13: 00007FF682F10CB3 v8::internal::SetupIsolateDelegate::SetupHeap+374499
14: 00007FF682EBEE10 v8::internal::SetupIsolateDelegate::SetupHeap+38976
15: 00007FF603A17538 
error Command failed with exit code 134.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
