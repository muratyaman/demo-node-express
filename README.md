# demo-node-express

Demo Node.js v16.18.1 and Express.js v.4.18.2 HTTP server

## installation

````sh
npm i
````

## execution

````sh
node index.js
````

## references

Node.js
[https://nodejs.org/en/](https://nodejs.org/en/)

Express.js
[https://expressjs.com/](https://expressjs.com/)

## benchmark

Install autocannon

````sh
npm i -g autocannon
````

### A. Plain text responses

Run autocannon using 10 connections for 60 seconds

````sh
autocannon -c 100 -d 60 http://127.0.0.1:8099
````

Output:

```plain
Running 60s test @ http://127.0.0.1:8099
100 connections


┌─────────┬──────┬──────┬───────┬──────┬─────────┬─────────┬───────┐
│ Stat    │ 2.5% │ 50%  │ 97.5% │ 99%  │ Avg     │ Stdev   │ Max   │
├─────────┼──────┼──────┼───────┼──────┼─────────┼─────────┼───────┤
│ Latency │ 4 ms │ 4 ms │ 6 ms  │ 7 ms │ 4.24 ms │ 0.63 ms │ 16 ms │
└─────────┴──────┴──────┴───────┴──────┴─────────┴─────────┴───────┘
┌───────────┬─────────┬─────────┬─────────┬─────────┬──────────┬─────────┬─────────┐
│ Stat      │ 1%      │ 2.5%    │ 50%     │ 97.5%   │ Avg      │ Stdev   │ Min     │
├───────────┼─────────┼─────────┼─────────┼─────────┼──────────┼─────────┼─────────┤
│ Req/Sec   │ 18751   │ 20751   │ 21087   │ 21183   │ 21023.47 │ 312.33  │ 18745   │
├───────────┼─────────┼─────────┼─────────┼─────────┼──────────┼─────────┼─────────┤
│ Bytes/Sec │ 4.48 MB │ 4.96 MB │ 5.04 MB │ 5.06 MB │ 5.02 MB  │ 74.7 kB │ 4.48 MB │
└───────────┴─────────┴─────────┴─────────┴─────────┴──────────┴─────────┴─────────┘

Req/Bytes counts sampled once per second.
# of samples: 60

1261k requests in 60.01s, 301 MB read
```

### B. JSON responses

Run autocannon using 10 connections for 60 seconds

```sh
autocannon -c 100 -d 60 http://127.0.0.1:8099/api
```

Output:

```plain
Running 60s test @ http://127.0.0.1:8099/api
100 connections


┌─────────┬──────┬──────┬───────┬──────┬─────────┬─────────┬───────┐
│ Stat    │ 2.5% │ 50%  │ 97.5% │ 99%  │ Avg     │ Stdev   │ Max   │
├─────────┼──────┼──────┼───────┼──────┼─────────┼─────────┼───────┤
│ Latency │ 4 ms │ 4 ms │ 6 ms  │ 7 ms │ 4.32 ms │ 0.75 ms │ 17 ms │
└─────────┴──────┴──────┴───────┴──────┴─────────┴─────────┴───────┘
┌───────────┬────────┬─────────┬─────────┬─────────┬──────────┬─────────┬────────┐
│ Stat      │ 1%     │ 2.5%    │ 50%     │ 97.5%   │ Avg      │ Stdev   │ Min    │
├───────────┼────────┼─────────┼─────────┼─────────┼──────────┼─────────┼────────┤
│ Req/Sec   │ 18303  │ 19951   │ 20271   │ 20367   │ 20220.54 │ 262.82  │ 18288  │
├───────────┼────────┼─────────┼─────────┼─────────┼──────────┼─────────┼────────┤
│ Bytes/Sec │ 5.3 MB │ 5.78 MB │ 5.88 MB │ 5.91 MB │ 5.86 MB  │ 76.8 kB │ 5.3 MB │
└───────────┴────────┴─────────┴─────────┴─────────┴──────────┴─────────┴────────┘

Req/Bytes counts sampled once per second.
# of samples: 60

1213k requests in 60.01s, 352 MB read
```
