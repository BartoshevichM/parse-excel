## Usage

### 1. Parse excel files (1 or more) from directory to array of javaScript objects


```bash
const { parseAllObj } = require('parseexcel')
const resArr = parseAllObj(directoryPath) 
```
result:

```bash
resArr =
    [
    //excel file 1
    [
        {
            columnName: value,
            columnName2: value2,
            columnName3: value3,
        },
        ...
    ],
        //excel file 2
        [
            {
                columnName: value,
                columnName2: value2,
                columnName3: value3,
            },
            ...
        ]
    ]
    
```
    
### 2. Parse excel files (1 or more) from directory to array of JSON



```bash
const { parseAllJson } = require('parseexcel')
const resArr = parseAllJson(directoryPath) 

resArr = 
[
 //excel file 1
    [
        JSON,
        ....
    ],
     //excel file 2
    [
        JSON,
        ...
    ]
]

   ```

### 3. Parse Async excel files (1 or more) from directory to array of javaScript objects
```bash
const { parseAllObjAsync } = require('parseexcel')
const resArr = await parseAllObjAsync(directoryPath) 
```
### 4. Parse Async excel files (1 or more) from directory to array of JSON
```bash
const { parseAllJsonAsync } = require('parseexcel')
const resArr = await parseAllJsonAsync(directoryPath) 
```
### 5. Parse excel file by path to array of javaScript objects
```bash
const { parseObjc } = require('parseexcel')
const resArr = parseObjc(filePath) 
```
### 6. Parse excel file by path to array of JSON
```bash
const { parseJson } = require('parseexcel')
const resArr = parseJson(filePath) 
```
