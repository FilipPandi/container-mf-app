import React from "react";
import Image from 'next/image'
import Link from "next/link";
import {Button} from "primereact/button";

export default function ImageExample() {
    return (
        <div style={{margin: '4%'}}>
            <h2><Link className={"link"} href="/components/public"><Button severity="secondary"
                                                                           icon="pi pi-angle-double-left"
                                                                           label={"Back"}/></Link></h2>

            <div style={{marginLeft: "1%"}}>
                <h1>Fixed image sizes from external sources:</h1>

                <div className="row">
                    <div className="image-container">
                        <h1 style={{
                            position: "absolute", zIndex: "999", color: "yellow", fontSize: "80px",
                            textShadow: "-2px 0 black, 0 2px black, 2px 0 black, 0 -2px black"
                        }}>OBJECT
                            FIT - COVER</h1>
                        <Image
                            style={{objectFit: "cover"}} //Cover (cropped to fit) or Contain (full image)  / none / fill / scale-down
                            fill={true}
                            src="https://wallpapers.com/images/featured/oaax18kaapkokaro.jpg"
                            alt="COVER"
                            unoptimized={true} //When true, the source image will be served as-is instead of changing quality, size, or format.
                            priority
                        />
                    </div>

                    <div className="image-container">
                        <h6 style={{
                            position: "absolute", zIndex: "999", color: "yellow", fontSize: "50px",
                            textShadow: "-2px 0 black, 0 2px black, 2px 0 black, 0 -2px black"
                        }}>OBJECT
                            FIT - CONTAIN</h6>
                        <Image
                            style={{objectFit: "contain"}} //Cover (cropped to fit) or Contain (full image)  / none / fill / scale-down
                            fill={true}
                            src="https://wallpapers.com/images/featured/oaax18kaapkokaro.jpg"
                            alt="CONTAIN"
                            unoptimized={true} //When true, the source image will be served as-is instead of changing quality, size, or format.
                            priority
                        />
                    </div>

                    <div className="image-container">
                        <h1 style={{
                            position: "absolute", zIndex: "999", color: "yellow", fontSize: "80px",
                            textShadow: "-2px 0 black, 0 2px black, 2px 0 black, 0 -2px black"
                        }}>OBJECT
                            FIT - NONE</h1>
                        <Image
                            style={{objectFit: "none"}} //Cover (cropped to fit) or Contain (full image) / none / fill / scale-down
                            fill={true}
                            src="https://wallpapers.com/images/featured/oaax18kaapkokaro.jpg"
                            alt="NONE"
                            unoptimized={true} //When true, the source image will be served as-is instead of changing quality, size, or format.
                            priority
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="image-container">
                        <h1 style={{
                            position: "absolute", zIndex: "999", color: "yellow", fontSize: "80px",
                            textShadow: "-2px 0 black, 0 2px black, 2px 0 black, 0 -2px black"
                        }}>OBJECT
                            FIT - FILL</h1>
                        <Image
                            style={{objectFit: "fill"}} //Cover (cropped to fit) or Contain (full image) / none / fill / scale-down
                            fill={true}
                            src="https://wallpapers.com/images/featured/oaax18kaapkokaro.jpg"
                            alt="FILL"
                            unoptimized={true} //When true, the source image will be served as-is instead of changing quality, size, or format.
                            priority
                        />
                    </div>

                    <div className="image-container">
                        <h6 style={{
                            position: "absolute", zIndex: "999", color: "yellow", fontSize: "50px",
                            textShadow: "-2px 0 black, 0 2px black, 2px 0 black, 0 -2px black"
                        }}>OBJECT
                            FIT - SCALE-DOWN</h6>
                        <Image
                            style={{objectFit: "scale-down"}} //Cover (cropped to fit) or Contain (full image) / none / fill / scale-down
                            fill={true}
                            src="https://wallpapers.com/images/featured/oaax18kaapkokaro.jpg"
                            alt="SCALE-DOWN"
                            unoptimized={true} //When true, the source image will be served as-is instead of changing quality, size, or format.
                            priority
                        />
                    </div>
                </div>
            </div>


        </div>
    );
}
