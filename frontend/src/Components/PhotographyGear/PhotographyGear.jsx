import React, { useState } from "react";
import "./PhotographyGear.css";
import Gear_01 from "../../assets/gear01.jpg";
import Gear_02 from "../../assets/gear02.jpg";
import Gear_03 from "../../assets/gear03.jpg";
import Gear_04 from "../../assets/gear04.jpg";

const PhotographyGear = () => {
  const [scrollPosition, setScrollPositon] = useState(0);

  return (
    <div className="photography-gear">
      <div className="gear-slider">
        <div className="gear-slider-btns">
          <div
            className={
              scrollPosition == -80 ? "next-btn btn-not-active" : "next-btn"
            }
            onClick={() => {
              if (scrollPosition === 0) {
                setScrollPositon(-10);
              } else if (scrollPosition === -10) {
                setScrollPositon(-20);
              } else if (scrollPosition === -20) {
                setScrollPositon(-30);
              } else if (scrollPosition === -30) {
                setScrollPositon(-40);
              } else if (scrollPosition === -40) {
                setScrollPositon(-50);
              } else if (scrollPosition === -50) {
                setScrollPositon(-60);
              } else if (scrollPosition === -60) {
                setScrollPositon(-70);
              } else if (scrollPosition === -70) {
                setScrollPositon(-80);
              }
            }}
          >
            <i class="fa-solid fa-arrow-right-long"></i>
          </div>
          <div
            className={
              scrollPosition == 0 ? "prev-btn btn-not-active" : "prev-btn"
            }
            onClick={() => {
              if (scrollPosition === -80) {
                setScrollPositon(-70);
              } else if (scrollPosition === -70) {
                setScrollPositon(-60);
              } else if (scrollPosition === -60) {
                setScrollPositon(-50);
              } else if (scrollPosition === -50) {
                setScrollPositon(-40);
              } else if (scrollPosition === -40) {
                setScrollPositon(-30);
              } else if (scrollPosition === -30) {
                setScrollPositon(-20);
              } else if (scrollPosition === -20) {
                setScrollPositon(-10);
              } else if (scrollPosition === -10) {
                setScrollPositon(0);
              }
            }}
          >
            <i class="fa-solid fa-arrow-left-long"></i>
          </div>
        </div>
        <ul
          style={{
            transform: `translateX(${scrollPosition}%)`,
          }}
        >
          <li>
            <img src={Gear_01} alt="" />
            <div className="flex">
              <div className="item-left">
                <h4 className="item-name">Leica M10 1</h4>
                <h5 className="item-price">$4,549</h5>
                <p className="condition">
                  Consition: <span>Excellent</span>
                </p>
              </div>
              <div className="item-right">
                <i class="fa-solid fa-cart-shopping"></i>
                <i class="fa-regular fa-bookmark"></i>
              </div>
            </div>
            <button className="mt-5 bg-[#2ecc71] text-white capitalize px-5 py-2 block mx-auto text-[13px]">
              <a href="https://a.co/d/a1PT3Em">explore amazon</a>
            </button>
          </li>
          <li>
            <img src={Gear_02} alt="" />
            <div className="flex">
              <div className="item-left">
                <h4 className="item-name">
                  Nikon AF-S DX Micro Nikkor 40mm f/2.8G
                </h4>
                <h5 className="item-price">$154</h5>
                <p className="condition">
                  Consition: <span>Excellent</span>
                </p>
              </div>
              <div className="item-right">
                <i class="fa-solid fa-cart-shopping"></i>
                <i class="fa-regular fa-bookmark"></i>
              </div>
            </div>
            <button className="mt-5 bg-[#2ecc71] text-white capitalize px-5 py-2 block mx-auto text-[13px]">
              <a href="https://a.co/d/a1PT3Em">explore amazon</a>
            </button>
          </li>
          <li>
            <img src={Gear_03} alt="" />
            <div className="flex">
              <div className="item-left">
                <h4 className="item-name">Nikon D5600</h4>
                <h5 className="item-price">$404</h5>
                <p className="condition">
                  Consition: <span>Excellent</span>
                </p>
              </div>
              <div className="item-right">
                <i class="fa-solid fa-cart-shopping"></i>
                <i class="fa-regular fa-bookmark"></i>
              </div>
            </div>
            <button className="mt-5 bg-[#2ecc71] text-white capitalize px-5 py-2 block mx-auto text-[13px]">
              <a href="https://a.co/d/a1PT3Em">explore amazon</a>
            </button>
          </li>
          <li>
            <img src={Gear_04} alt="" />
            <div className="flex">
              <div className="item-left">
                <h4 className="item-name">Sony FE 70-200mm f/2.8 GM OSS</h4>
                <h5 className="item-price">$1,699</h5>
                <p className="condition">
                  Consition: <span>Excellent</span>
                </p>
              </div>
              <div className="item-right">
                <i class="fa-solid fa-cart-shopping"></i>
                <i class="fa-regular fa-bookmark"></i>
              </div>
            </div>
            <button className="mt-5 bg-[#2ecc71] text-white capitalize px-5 py-2 block mx-auto text-[13px]">
              <a href="https://a.co/d/a1PT3Em">explore amazon</a>
            </button>
          </li>
          <li>
            <img src={Gear_01} alt="" />
            <div className="flex">
              <div className="item-left">
                <h4 className="item-name">Leica M10 5</h4>
                <h5 className="item-price">$4,549</h5>
                <p className="condition">
                  Consition: <span>Excellent</span>
                </p>
              </div>
              <div className="item-right">
                <i class="fa-solid fa-cart-shopping"></i>
                <i class="fa-regular fa-bookmark"></i>
              </div>
            </div>
            <button className="mt-5 bg-[#2ecc71] text-white capitalize px-5 py-2 block mx-auto text-[13px]">
              <a href="https://a.co/d/a1PT3Em">explore amazon</a>
            </button>
          </li>
          <li>
            <img src={Gear_01} alt="" />
            <div className="flex">
              <div className="item-left">
                <h4 className="item-name">Leica M10 6</h4>
                <h5 className="item-price">$4,549</h5>
                <p className="condition">
                  Consition: <span>Excellent</span>
                </p>
              </div>
              <div className="item-right">
                <i class="fa-solid fa-cart-shopping"></i>
                <i class="fa-regular fa-bookmark"></i>
              </div>
            </div>
            <button className="mt-5 bg-[#2ecc71] text-white capitalize px-5 py-2 block mx-auto text-[13px]">
              <a href="https://a.co/d/a1PT3Em">explore amazon</a>
            </button>
          </li>
          <li>
            <img src={Gear_01} alt="" />
            <div className="flex">
              <div className="item-left">
                <h4 className="item-name">Leica M10 7</h4>
                <h5 className="item-price">$4,549</h5>
                <p className="condition">
                  Consition: <span>Excellent</span>
                </p>
              </div>
              <div className="item-right">
                <i class="fa-solid fa-cart-shopping"></i>
                <i class="fa-regular fa-bookmark"></i>
              </div>
            </div>
            <button className="mt-5 bg-[#2ecc71] text-white capitalize px-5 py-2 block mx-auto text-[13px]">
              <a href="https://a.co/d/a1PT3Em">explore amazon</a>
            </button>
          </li>
          <li>
            <img src={Gear_01} alt="" />
            <div className="flex">
              <div className="item-left">
                <h4 className="item-name">Leica M10 8</h4>
                <h5 className="item-price">$4,549</h5>
                <p className="condition">
                  Consition: <span>Excellent</span>
                </p>
              </div>
              <div className="item-right">
                <i class="fa-solid fa-cart-shopping"></i>
                <i class="fa-regular fa-bookmark"></i>
              </div>
            </div>
            <button className="mt-5 bg-[#2ecc71] text-white capitalize px-5 py-2 block mx-auto text-[13px]">
              <a href="https://a.co/d/a1PT3Em">explore amazon</a>
            </button>
          </li>
          <li>
            <img src={Gear_01} alt="" />
            <div className="flex">
              <div className="item-left">
                <h4 className="item-name">Leica M10 9</h4>
                <h5 className="item-price">$4,549</h5>
                <p className="condition">
                  Consition: <span>Excellent</span>
                </p>
              </div>
              <div className="item-right">
                <i class="fa-solid fa-cart-shopping"></i>
                <i class="fa-regular fa-bookmark"></i>
              </div>
            </div>
            <button className="mt-5 bg-[#2ecc71] text-white block mx-auto capitalize px-5 py-2 text-[13px]">
              <a href="https://a.co/d/a1PT3Em">explore amazon</a>
            </button>
          </li>
          <li>
            <img src={Gear_01} alt="" />
            <div className="flex">
              <div className="item-left">
                <h4 className="item-name">Leica M10 10</h4>
                <h5 className="item-price">$4,549</h5>
                <p className="condition">
                  Consition: <span>Excellent</span>
                </p>
              </div>
              <div className="item-right">
                <i class="fa-solid fa-cart-shopping"></i>
                <i class="fa-regular fa-bookmark"></i>
              </div>
            </div>
            <button className="mt-5 bg-[#2ecc71] block mx-auto text-white capitalize px-5 py-2 text-[13px]">
              <a href="https://a.co/d/a1PT3Em">explore amazon</a>
            </button>
          </li>
        </ul>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
};

export default PhotographyGear;
