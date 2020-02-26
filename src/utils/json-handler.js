export const saveList = (json) => {
    const filePath = './items.json';
    const jsonContent = JSON.parser(json)
    const head = { method: 'POST',
                   body: jsonContent,
                 }
    var currentList;
    fetch(filePath,
          head
    ).then(function(response) {
        return response.text();
    }
    ).then(function(data){
       currentList =  data
    }
    ).catch(
        console.error('There were an error')
    )
    console.log(currentList)
}
export const readList = () => {
    const filePath = './items.json';
    var currentList;
    fetch(filePath).then(function(response) {
     return response.text();
    }
    ).then(function(data){
     currentList =  data
       console.log(currentList)
    }
    ).catch(
        console.error('There were an error')
    )
}