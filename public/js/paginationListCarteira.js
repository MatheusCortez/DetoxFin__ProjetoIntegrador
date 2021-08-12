var state = {
    'querySet': JSON.stringify(carteira),

    'page':1,

    'rows':1,
}

function pagination (querySet, page, rows) {
    var trimStart = (page -1)* rows
    var trimEnd = trimStart + rows

    var trimmedData = querySet.slice(trimStart, trimEnd)
    
    var pages = Math.ceil(querySet.length / rows)

    return{
        'querySet':trimmedData,
        'pages':pages
    }

}

function buildTable()