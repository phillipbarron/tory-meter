import checkStuff from './training-service';

const isRightWing = content => {
    console.log(`detecting sentiment for: ${content}`);
    const detectedResponse = checkStuff(content);
    console.log('the detected response was ', detectedResponse);

    return Math.random() >= 0.5
}

export default isRightWing;
