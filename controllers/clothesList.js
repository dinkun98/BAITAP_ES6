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
}