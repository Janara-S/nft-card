
window.addEventListener('load', function () {
    const body = document.querySelector('body');
    const main = document.createElement ('main');
    const div = document.createElement ('div');
    const divCard = document.createElement ('divCard');
    const nft = document.createElement ('nft');
    const nftImg = document.createElement ('nftImg');
    const h1 = document.createElement ('h1');
    const cardContent = document.createElement ('cardContent')
    const titleBox = document.createElement ('titleBox');
    const descBox = document.createElement ('descBox')
    const p = document.createElement ('p');
    const attributesBox = document.createElement ('attributesBox');
    const ethPriceBox = document.createElement ('ethPriceBox');
    const ethIcon = document.createElement ('ethIcon');
    const daysLeftBox = document.createElement ('daysLeftBox');
    const h2 = document.createElement ('h2');
    const daysLeftIcon = document.createElement ('daysLeftIcon');
    const daysLeftText = document.createElement ('daysLeftText');
    const footer = document.createElement ('footer');
    const creatorImg = document.createElement ('creatorImg');
    const creatorText = document.createElement ('creatorText');
    const creatorLink = document.createElement ('creatorLink');
    const listElements = [main,div,divCard,nft,nftImg, h1,p, titleBox,descBox, cardContent,attributesBox, ethPriceBox, ethIcon, daysLeftBox,h2, daysLeftIcon, daysLeftText, footer, creatorText, creatorLink];
  
    
//style
body.style.width = '100%';
body.style.height= '800px';
body.style.background ='hsl(217, 54%, 11%)';
body.style.padding='0';
body.style.margin='0';
body.style.display ='flex';
body.style.alignItems = 'center';
body.style.justifyContent = 'center';

main.style.display ='flex';
main.style.background ='hsl(216, 50%, 16%)';
main.style.width = '350px';
main.style.height = '600px';
main.style.alignItems = 'center';
main.style.justifyContent = 'center';
main.style.borderRadius = '18px';
main.style.boxShadow  = '0px 20px 4px 20px hsla(0, 0%, 0%, 0.125)';


div.style.width = 'auto';
div.style.height = 'auto';
div.style.padding = '4% 5%';
div.style.display = 'flex';
div.style.flexDirection = 'column';
div.style.justifyContent = 'center';
div.style.alignItems = 'center';

 
cardContent.style.height = 'auto';
cardContent.style.width = 'auto';
cardContent.style.padding = '4% 5%';
cardContent.style.height = 'auto';
cardContent.style.display = 'flex';
cardContent.style.flexDirection = 'column';
cardContent.style.justifyContent = 'center';
cardContent.style.alignItems = 'center';


nft.style.position = 'relative';
nft.style.display = 'flex';
nft.style.justifyContent = 'center';
nft.style.alignItems = 'center';
nft.style.borderRadius = '10px';
nft.style.overflow = 'hidden';

nftImg.style.height = '304px';
nftImg.style.width = '304px';
nftImg.style.opacity = '1';
// nftImg.src = "./img/equilibrium.jpg";

titleBox.style.paddingTop = '4%';
titleBox.style.paddingLeft = '2%';
titleBox.style.alignSelf = 'start';
titleBox.style.textAlign = 'left';

h1.style.fontFamily = 'Outfit, sans-serif';
h1.style.fontWeight = '600 ';
h1.style.fontSize = '22px';
h1.style.alignSelf = 'start';
h1.style.textAlign = 'left';
h1.style.color = ' white';

descBox.style.padding = '5% 2%';

p.style.fontFamily = 'Outfit, sans-serif';
p.style.fontWeight = '300';
p.style.color = 'hsl(215, 51%, 70%)';
p.style.fontSize = '18px'

attributesBox.style.display = 'flex';
attributesBox.style.paddingTop = '2%';
attributesBox.style.width = '100%';
attributesBox.style.justifyContent = 'space-between';

ethPriceBox.style.display = 'flex';

ethIcon.style.height = '18px';
ethIcon.style.paddingLeft = '6px';
ethIcon.style.paddingRight = '8px';


h2.style.fontFamily = 'Outfit, sans-serif';
h2.style.fontWeight = '500';
h2.style.fontSize = '16px';
h2.style.color = 'hsl(178, 100%, 50%)';
h2.style.marginBlockStart = '0';
h2.style.marginBlockEnd = '0';
h2.style.marginInlineStart = '0';
h2.style.marginInlineEnd = '0';
h2.style.paddingLeft = '6px';
ethPriceBox.style.display = 'flex';

daysLeftIcon.style.height = '18px';
daysLeftIcon.style.width = '18px';
daysLeftIcon.style.paddingRight = '19px';

daysLeftText.style.fontFamily = 'Outfit, sans-serif';
daysLeftText.style.fontWeight = '400';
daysLeftText.style.fontSize = '16px';
daysLeftText.style.color = 'hsl(215, 51%, 70%)';
daysLeftText.style.paddingRight = '8px';

footer.style.width = '96%';
footer.style.display = 'flex';
footer.style.alignItems = 'center';
footer.style.marginTop = '5%';
footer.style.borderTop = '1px solid hsl(215, 32%, 27%)';
footer.style.paddingTop = '2%'


creatorImg.style.border = '1px solid white';
creatorImg.style.borderRadius = '50%';
creatorImg.style.height = '34px';
creatorImg.style.width = '34px';

creatorText.style.fontFamily = 'Outfit, sans-serif';
creatorText.style.fontWeight = '300';
creatorText.style.fontSize = '16px';
creatorText.style.color = 'hsl(215, 51%, 70%)';
creatorText.style.paddingLeft = '4%';


creatorLink.style.color = 'white';
creatorLink.style.paddingLeft = '8px';

                        
creatorLink.append('Jules Wyvern');
creatorText.append('Creation of');
footer.append(creatorImg, creatorText, creatorLink)
daysLeftText.append('3 days left');
h2.append('0.041 ETH');
h1.append('Equilibrium #3429 ' );
p.append('Our Equilibrium collection promotes balance and calm.');
ethPriceBox.append(ethIcon,h2);
daysLeftBox.append(daysLeftIcon, daysLeftText);
attributesBox.append(ethPriceBox, daysLeftBox);
descBox.append(p);
titleBox.append(h1);
cardContent.append(nft,titleBox,descBox,attributesBox, footer );
nft.append(nftImg);
divCard.append(cardContent);
div.append(divCard);
main.append(div);
body.append(main);

//классы
div.setAttribute('class', '#wrapper');
creatorImg.setAttribute('class', 'creator');
daysLeftIcon.setAttribute('class', 'dayLeft');
nftImg.setAttribute('class', 'card');
ethIcon.setAttribute('class', 'icon');

})

alert ('Я оцениваю свою работу на ... баллов');

