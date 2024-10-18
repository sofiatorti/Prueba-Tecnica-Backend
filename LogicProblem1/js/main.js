function organizeGifts(giftsString) {
    const processGifts = (type, count) => {
      const boxes = Math.floor(count / 10);
      const pallets = Math.floor(boxes / 5);
      const remainingBoxes = boxes % 5;
      const remainingGifts = count % 10;
  
      return `${'['.repeat(pallets)}${type.repeat(pallets)}` +
             `${'{'.repeat(remainingBoxes)}${type.repeat(remainingBoxes)}` +
             `(${type.repeat(remainingGifts)})`;
    };
  
 
    const giftTypes = giftsString.match(/\d+[a-z]/g);
    
    return giftTypes.map(gift => {
      const [count, type] = gift.match(/\d+/)[0] && gift.match(/[a-z]/)[0];
      return processGifts(type, parseInt(count));
    }).join('');
  }
  