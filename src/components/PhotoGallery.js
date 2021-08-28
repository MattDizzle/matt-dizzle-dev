import { ProGallery } from 'pro-gallery';
import 'pro-gallery/dist/statics/main.css';
import  one  from "../images/2.jpg"
import  two  from "../images/3 (1).jpg"
import  three  from "../images/3 (2).jpg"
import  four  from "../images/3 (3).jpg"
import  five  from "../images/5.jpg"
import  six  from "../images/6.jpg"
import  seven  from "../images/7.jpg"
import  eight  from "../images/8.jpg"
import  nine  from "../images/9.jpg"
import  ten  from "../images/10.jpg"
import  eleven  from "../images/11.jpg"
import  twelve  from "../images/12.jpg"

export default function PhotoGallery() {
    const items = [
        { 
            itemId: 'sample-id',
            mediaUrl: one,
            metaData: {
                type: 'image',
                height: 200,
                width: 100,
                title: 'sample-title',
                description: 'sample-description',
                focalPoint: [0, 0],
                link: {
                    url: '../images/12.jpg',
                    target: '_blank'
                },
            }
        },
        { 
            itemId: 'differentItem',
            mediaUrl: two,
            metaData: {
                type: 'image',
                height: 200,
                width: 100,
                title: 'sample-title',
                description: 'sample-description',
                focalPoint: [0, 0],
                link: {
                    url: 'http://example.com',
                    target: '_blank'
                },
            }
        },
        { 
            itemId: 'differentItem',
            mediaUrl: three,
            metaData: {
                type: 'image',
                height: 200,
                width: 100,
                title: 'sample-title',
                description: 'sample-description',
                focalPoint: [0, 0],
                link: {
                    url: 'http://example.com',
                    target: '_blank'
                },
            }
        },
        { 
            itemId: 'differentItem',
            mediaUrl: four,
            metaData: {
                type: 'image',
                height: 200,
                width: 100,
                title: 'sample-title',
                description: 'sample-description',
                focalPoint: [0, 0],
                link: {
                    url: 'http://example.com',
                    target: '_blank'
                },
            }
        },
        { 
            itemId: 'differentItem',
            mediaUrl: five,
            metaData: {
                type: 'image',
                height: 200,
                width: 100,
                title: 'sample-title',
                description: 'sample-description',
                focalPoint: [0, 0],
                link: {
                    url: 'http://example.com',
                    target: '_blank'
                },
            }
        },
        { 
            itemId: 'differentItem',
            mediaUrl: six,
            metaData: {
                type: 'image',
                height: 200,
                width: 100,
                title: 'sample-title',
                description: 'sample-description',
                focalPoint: [0, 0],
                link: {
                    url: 'http://example.com',
                    target: '_blank'
                },
            }
        },
        { 
            itemId: 'differentItem',
            mediaUrl: seven,
            metaData: {
                type: 'image',
                height: 200,
                width: 100,
                title: 'sample-title',
                description: 'sample-description',
                focalPoint: [0, 0],
                link: {
                    url: 'http://example.com',
                    target: '_blank'
                },
            }
        },
        { 
            itemId: 'differentItem',
            mediaUrl: eight,
            metaData: {
                type: 'image',
                height: 200,
                width: 100,
                title: 'sample-title',
                description: 'sample-description',
                focalPoint: [0, 0],
                link: {
                    url: 'http://example.com',
                    target: '_blank'
                },
            }
        },
        { 
            itemId: 'differentItem',
            mediaUrl: nine,
            metaData: {
                type: 'image',
                height: 200,
                width: 100,
                title: 'sample-title',
                description: 'sample-description',
                focalPoint: [0, 0],
                link: {
                    url: 'http://example.com',
                    target: '_blank'
                },
            }
        },
        { 
            itemId: 'differentItem',
            mediaUrl: ten,
            metaData: {
                type: 'image',
                height: 200,
                width: 100,
                title: 'sample-title',
                description: 'sample-description',
                focalPoint: [0, 0],
                link: {
                    url: 'http://example.com',
                    target: '_blank'
                },
            }
        },
        { 
            itemId: 'differentItem',
            mediaUrl: eleven,
            metaData: {
                type: 'image',
                height: 200,
                width: 100,
                title: 'sample-title',
                description: 'sample-description',
                focalPoint: [0, 0],
                link: {
                    url: 'http://example.com',
                    target: '_blank'
                },
            }
        },
        { 
            itemId: 'differentItem',
            mediaUrl: twelve,
            metaData: {
                type: 'image',
                height: 200,
                width: 100,
                title: 'sample-title',
                description: 'sample-description',
                focalPoint: [0, 0],
                link: {
                    url: 'http://example.com',
                    target: '_blank'
                },
            }
        },
        
    ]

    // The options of the gallery (from the playground current state)
    const options = {
        galleryLayout: -1,
    };

    // The size of the gallery container. The images will fit themselves in it
    const container = {
        width: window.innerWidth,
        height: window.innerHeight
    };

    // The eventsListener will notify you anytime something has happened in the gallery.
    const eventsListener = (eventName, eventData) => console.log({eventName, eventData}); 

    // The scrollingElement is usually the window, if you are scrolling inside another element, suplly it here
    const scrollingElement = window;

    return (
        <ProGallery
            items={items}
            options={options}
            container={container}
            eventsListener={eventsListener}
            scrollingElement={scrollingElement}
        />
    );
}