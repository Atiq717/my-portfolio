import React, { useEffect, useRef } from 'react';
import './css/Cards.css';

const Cards: React.FC = () => {
    const stackAreaRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const cards: NodeListOf<HTMLDivElement> = document.querySelectorAll('.card');

        const handleScroll = () => {
            const stackArea: HTMLElement | null = stackAreaRef.current;

            if (stackArea) {
                let proportion: number = stackArea.getBoundingClientRect().top / window.innerHeight;

                if (proportion <= 0) {
                    let n: number = cards.length;
                    let index: number = Math.ceil((proportion * n) / 2);
                    index = Math.abs(index) - 1;

                    for (let i = 0; i < n; i++) {
                        if (i <= index) {
                            cards[i].classList.add('active');
                        } else {
                            cards[i].classList.remove('active');
                        }
                    }
                } else {
                    cards.forEach(card => card.classList.remove('active'));
                }
                rotateCards();
            }
        };

        const rotateCards = () => {
            cards.forEach((card, index) => {
                if (card.classList.contains('active')) {
                    card.style.transform = `translate(-50%, calc(-120vh - ${index * 300}px)) rotate(-48deg)`;
                } else {
                    if (index === 1) {
                        card.style.transform = 'translate(calc(-50% + 10px), calc(-50% - 350px)) rotate(10deg)';
                    } else if (index === 2) {
                        card.style.transform = 'translate(-50%, calc(-50% - 700px)) rotate(20deg)';
                    } else if (index === 3) {
                        card.style.transform = 'translate(-50%, calc(-50% - 1050px)) rotate(30deg)';
                    } else if (index === 4) {
                        card.style.transform = 'translate(-50%, calc(-50% - 1400px)) rotate(40deg)';
                    } else {
                        card.style.transform = 'translate(-50%, -50%) rotate(0deg) translateY(0px)';
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);

        const adjust = () => {
            let windowWidth = window.innerWidth;
            const left = document.querySelector('.left') as HTMLElement;
            if (left) {
                left.remove();
                if (windowWidth < 800) {
                    stackAreaRef.current?.insertAdjacentElement('beforebegin', left);
                } else {
                    stackAreaRef.current?.insertAdjacentElement('afterbegin', left);
                }
            }
        };
        adjust();

        window.addEventListener('resize', adjust);

        // Cleanup
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', adjust);
        };
    }, []); 

    return (
        <section id="cards">
            <div className="center">
                <div className="top">Projects</div>
                <div className="stack-area" ref={stackAreaRef}>
                    <div className="left">
                        <div className="title"><span>My</span> Projects</div>
                        <div className="sub-title">
                            A collection of my most innovative and impactful work. Each project reflects my dedication to solving complex problems with simple, elegant solutions. Dive in to see how I turn ideas into reality, boosting productivity, facilitating learning, and bringing new ideas to life.
                            <br />
                            <button>Click to browse</button>
                        </div>
                    </div>
                    <div className="right">
                        <div className="cards">
                            <a href="https://atiq717.github.io/village-lodge/" target="_blank" rel="noopener noreferrer" className="card" style={{ transform: 'translate(-50%, -50%) rotate(0deg) translateY(0px)' }}>
                                <div className="sub"></div>
                                <div className="content"></div>
                            </a>
                            <a href="https://jamming-spotify-api.surge.sh" target="_blank" rel="noopener noreferrer" className="card" style={{ transform: 'translate(calc(-50% + 10px), calc(-50% - 350px)) rotate(10deg)' }}>
                                <div className="sub"></div>
                                <div className="content"></div>
                            </a>
                            <a href="https://mohammedkhan.me/mohammedkhan/task" target="_blank" rel="noopener noreferrer" className="card" style={{ transform: 'translate(-50%, calc(-50% - 700px)) rotate(20deg)' }}>
                                <div className="sub"></div>
                                <div className="content"></div>
                            </a>
                            <a href="https://mohammedkhan.me/mohammedkhan/project1" target="_blank" rel="noopener noreferrer" className="card" style={{ transform: 'translate(-50%, calc(-50% - 1050px)) rotate(30deg)' }}>
                                <div className="sub"></div>
                                <div className="content"></div>
                            </a>
                            <a href="https://mohammedkhan.me/mohammedkhan/project2" target="_blank" rel="noopener noreferrer" className="card" style={{ transform: 'translate(-50%, calc(-50% - 1400px)) rotate(40deg)' }}>
                                <div className="sub"></div>
                                <div className="content"></div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cards;
