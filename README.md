# demo-node-express
Demo Node.js and Express.js HTTP server

## installation

````
npm i
````

## execution

````
node index.js
````

## references

Node.js
[https://nodejs.org/en/](https://nodejs.org/en/)

Express.js
[https://expressjs.com/](https://expressjs.com/)

## benchmark

Install autocannon

````
npm i -g autocannon
````

Run autocannon for 60 seconds

````
autocannon -c 10 -d 60 http://127.0.0.1:8099
````

Output:

````
Running 60s test @ http://127.0.0.1:8099
10 connections

┌─────────┬──────┬──────┬───────┬──────┬─────────┬─────────┬──────────┐
│ Stat    │ 2.5% │ 50%  │ 97.5% │ 99%  │ Avg     │ Stdev   │ Max      │
├─────────┼──────┼──────┼───────┼──────┼─────────┼─────────┼──────────┤
│ Latency │ 0 ms │ 0 ms │ 1 ms  │ 1 ms │ 0.18 ms │ 0.42 ms │ 12.99 ms │
└─────────┴──────┴──────┴───────┴──────┴─────────┴─────────┴──────────┘
┌───────────┬─────────┬─────────┬─────────┬─────────┬─────────┬────────┬─────────┐
│ Stat      │ 1%      │ 2.5%    │ 50%     │ 97.5%   │ Avg     │ Stdev  │ Min     │
├───────────┼─────────┼─────────┼─────────┼─────────┼─────────┼────────┼─────────┤
│ Req/Sec   │ 5279    │ 10071   │ 11671   │ 11767   │ 11490.3 │ 842.27 │ 5277    │
├───────────┼─────────┼─────────┼─────────┼─────────┼─────────┼────────┼─────────┤
│ Bytes/Sec │ 1.14 MB │ 2.18 MB │ 2.52 MB │ 2.54 MB │ 2.48 MB │ 182 kB │ 1.14 MB │
└───────────┴─────────┴─────────┴─────────┴─────────┴─────────┴────────┴─────────┘

Req/Bytes counts sampled once per second.

689k requests in 60.05s, 149 MB read
````