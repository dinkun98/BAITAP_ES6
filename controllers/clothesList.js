export class clothesList {
    constructor() {
        this.clothlist = [];
    }
    addClothes(clothes) {
        this.clothlist.push(clothes);
    }
    renderClothes() {
        //các thẻ html chứa nội dung của các đối tượng kính
        let content = "";
        content = this.clothlist.reduce((clContent, item, index) => {
            if(item.type === "topclothes")
            {
                clContent += `
            
                <div class="col-4">
                <img class="img-thumbnail" onclick="tryAo(event)"data-id = "${item.id}" src="${item.imgSrcJpg}"> 
                </div>
            `
            }
            console.log(clContent)
            return clContent;
        },"");


        return content;
    }

    renderQuan() {
        //các thẻ html chứa nội dung của các đối tượng kính
        let content = "";
        content = this.clothlist.reduce((clContent, item, index) => {
            if(item.type === "botclothes")
            {
                clContent += `
            
                <div class="col-4">
                <img class="img-thumbnail" onclick="tryAo(event)"data-id = "${item.id}" src="${item.imgSrcJpg}"> 
                </div>
            `
            }
            console.log(clContent)
            return clContent;
        },"");


        return content;
    }

    renderGiay() {
        //các thẻ html chứa nội dung của các đối tượng kính
        let content = "";
        content = this.clothlist.reduce((clContent, item, index) => {
            if(item.type === "shoes")
            {
                clContent += `
            
                <div class="col-4">
                <img class="img-thumbnail" onclick="tryAo(event)"data-id = "${item.id}" src="${item.imgSrcJpg}"> 
                </div>
            `
            }
            console.log(clContent)
            return clContent;
        },"");


        return content;
    }

    renderToc(){
        //các thẻ html chứa nội dung của các đối tượng kính
        let content = "";
        content = this.clothlist.reduce((clContent, item, index) => {
            if(item.type === "hairstyle")
            {
                clContent += `
            
                <div class="col-4">
                <img class="img-thumbnail" onclick="tryAo(event)"data-id = "${item.id}" src="${item.imgSrcJpg}"> 
                </div>
            `
            }
            console.log(clContent)
            return clContent;
        },"");


        return content;
    }

    renderDayChuyen(){
          //các thẻ html chứa nội dung của các đối tượng kính
          let content = "";
          content = this.clothlist.reduce((clContent, item, index) => {
              if(item.type === "necklaces")
              {
                  clContent += `
              
                  <div class="col-4">
                  <img class="img-thumbnail" onclick="tryAo(event)"data-id = "${item.id}" src="${item.imgSrcJpg}"> 
                  </div>
              `
              }
              console.log(clContent)
              return clContent;
          },"");
  
  
          return content;
    }

    renderTuiXach(){
         //các thẻ html chứa nội dung của các đối tượng kính
         let content = "";
         content = this.clothlist.reduce((clContent, item, index) => {
             if(item.type === "handbags")
             {
                 clContent += `
             
                 <div class="col-4">
                 <img class="img-thumbnail" onclick="tryAo(event)"data-id = "${item.id}" src="${item.imgSrcJpg}"> 
                 </div>
             `
             }
             console.log(clContent)
             return clContent;
         },"");
 
 
         return content;
    }

    renderNen(){
        //các thẻ html chứa nội dung của các đối tượng kính
          let content = "";
          content = this.clothlist.reduce((clContent, item, index) => {
              if(item.type === "background")
              {
                  clContent += `
              
                  <div class="col-4">
                  <img class="img-thumbnail" onclick="tryAo(event)"data-id = "${item.id}" src="${item.imgSrcJpg}"> 
                  </div>
              `
              }
              console.log(clContent)
              return clContent;
          },"");
  
  
          return content;
    }

    
}