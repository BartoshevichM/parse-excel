## Usage

| animal | weight | color  |
|--------|-------:|:------:|
| dog    | 20 kg   | black |
| cat    | 5 kg    | white |
| mouse  | 0.15 kg | gray  |

### 1. Parse excel file by path to array of javaScript objects
```bash
const { parseObjc } = require('parseexcel')

const resArr = parseObjc(filePath)
```

### Result:
```bash
resArr = [
           { animal: 'dog', weight: '20 kg', color: 'black' },
           { animal: 'cat', weight: '5 kg', color: 'white' },
           { animal: 'mouse', weight: '0.15 kg', color: 'gray' }
         ]
```

### 2. Parse excel file by path to array of JSON

```bash
const { parseJson } = require('parseexcel')

const resArr = parseJson(filePath) 
```
### Result:

```bash
resArr = [
           '{"animal":"dog","weight":"20 kg","color":"black"}',
           '{"animal":"cat","weight":"5 kg","color":"white"}',
           '{"animal":"mouse","weight":"0.15 kg","color":"gray"}'
         ]
```
### 3. Parse excel files (1 or more) from directory to array of javaScript objects

Table 1

|  phone  |  price | color |
|---------|-------:|:-----:|
|  Xiaomi | 100 $  |  blue  |
|  Samsung| 150 $  |  white |
|  Nokia  | 50 $   |  black |

Table 2

|      TV     | price  | size  | weight |
|-------------|-------:|:------:|:-----:|
| LG          | 150 $  |  150  |   10   |
| Horizont    | 50 $   | 70    |   12   |
| Panasonic   | 250 $  | 120   |   8    |

Usage:
```bash
const { parseAllObj } = require('parseexcel')

const resArr = parseAllObj(directoryPath) 
```
    
### Result:

```bash
resArr = [
           [
             { phone: 'Xiaomi', price: '100 $', color: 'blue' },
             { phone: 'Samsung', price: '150 $', color: 'white' },
             { phone: 'Nokia', price: '50 $', color: 'black' }
           ],
           [
             { TV: 'LG', price: '150 $', size: 150, weight: 10 },
             { TV: 'Horizont', price: '50 $', size: 70, weight: 12 },
             { TV: 'Panasonic', price: '250$', size: 120, weight: 8 }
           ]
         ]
```    
### 4. Parse excel files (1 or more) from directory to array of JSON

```bash
const { parseAllJson } = require('parseexcel')

const resArr = parseAllJson(directoryPath) 
   ```

### 5. Parse Async excel files (1 or more) from directory to array of javaScript objects
```bash
const { parseAllObjAsync } = require('parseexcel')

const resArr = await parseAllObjAsync(directoryPath) 
```
### 6. Parse Async excel files (1 or more) from directory to array of JSON

```bash
const { parseAllJsonAsync } = require('parseexcel')

const resArr = await parseAllJsonAsync(directoryPath) 
```
