AFRAME.registerComponent('nft-info',{
    init: function(){
        
        NftButton = document.querySelectorAll('.menu-button')
        console.log("does this get imported")
        console.log("can we print 2 thngs")
        
        this.imageInfo = {
            title: "danguiz",
            description: "danguiz work"
        }
        this.onMenuButtonClick = this.onMenuButtonClick.bind(this);
        NftButton[0].addEventListener('click', this.onMenuButtonClick);
        },
    onMenuButtonClick: function (e) {
    return 
    }
});