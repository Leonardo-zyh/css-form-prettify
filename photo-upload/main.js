$('imageInput').on('change' ,function(e){
   let formData = new FormData
  
    formData.append('baidu.com',e.targer.files[0])
    $.ajax({
        url:'baidu.com',
        data:formData,
        processData:false,
        contentTape:false,
        type:'POSE',

    })
    console.log(1)
    e.targer.value = ''
})
