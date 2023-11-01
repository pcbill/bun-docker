import React, { useState } from 'react';

const SlotMachine = () => {
    const [reels, setReels] = useState(['🍎', '🍊', '🍇']);
    const [isSpinning, setIsSpinning] = useState(false);

    const spinReels = () => {
        if (!isSpinning) {
            setIsSpinning(true);
            setReels([
                getRandomFruit(),
                getRandomFruit(),
                getRandomFruit(),
            ]);
            setTimeout(() => {
                setIsSpinning(false);
            }, 2000);
        }
    };

    const getRandomFruit = () => {
        const fruits = ['🍎', '🍊', '🍇'];
        const randomIndex = Math.floor(Math.random() * fruits.length);
        return fruits[randomIndex];
    };

    // return (
    //     <div>
    //         <div className={`reels ${isSpinning ? 'spin' : ''}`}>
    //             {reels.map((fruit, index) => (
    //                 <div key={index} className="reel">{fruit}</div>
    //             ))}
    //         </div>
    //         <button onClick={spinReels} disabled={isSpinning}>
    //             {isSpinning ? '旋轉中...' : '開始旋轉'}
    //         </button>
    //     </div>
    // );

    return (
        <div>
            <div className={`reels ${isSpinning ? 'spin' : ''}`}>
                {reels.map((fruit, index) => (
                    <div key={index} className="reel">{fruit}</div>
                ))}
            </div>
            <button onClick={spinReels} disabled={isSpinning}>
                {isSpinning ? '旋轉中...' : '開始旋轉'}
            </button>
        </div>
    );
};

export default SlotMachine;
