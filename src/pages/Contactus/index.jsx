import React from "react";
import { Helmet } from "react-helmet";
import { Text, Button, Img, TextArea, Input } from "../../components";
import Header from "../../components/Header";

export default function ContactusPage() {
  return (
    <>
      <Helmet>
        <title>Chirag's Application1</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full">
        <div className="self-end bg-gray-900_01">
          <div>
            <Header className="p-5 bg-white-A700" />
            <div className="h-[1521px] relative">
              <div className="w-full top-0 right-0 left-0 p-[47px] m-auto md:p-5 bg-gradient2 absolute">
                <div className="flex md:flex-col justify-between items-start w-full mb-[301px] ml-[13px] gap-5 md:ml-0 max-w-[1372px]">
                  <div className="flex flex-col items-start w-[44%] md:w-full gap-[174px] md:gap-[130px] md:p-5 sm:gap-[87px]">
                    <Text size="5xl" as="p" className="!text-gray-400 !font-ranade uppercase">
                      Brewing your
                    </Text>
                    <Button
                      color="gray_400"
                      size="sm"
                      variant="outline"
                      className="sm:px-5 uppercase min-w-[231px] rounded-[32px]"
                    >
                      Contact us
                    </Button>
                    <Text size="4xl" as="p" className="w-[82%] md:w-full !text-gray-400 !font-ranade uppercase">
                      <>
                        A blend of luxury,
                        <br />
                        passion and destiny
                      </>
                    </Text>
                  </div>
                  <div className="h-[637px] w-[50%] mb-[177px] relative">
                    <div className="h-[614px] w-[614px] top-0 right-0 left-0 m-auto absolute">
                      <Img
                        src="images/img_symbol.svg"
                        alt="symbol_one"
                        className="justify-center h-[614px] w-full md:w-[614px] md:h-auto left-0 bottom-0 right-0 top-0 m-auto absolute"
                      />
                      <div className="h-[42px] w-[43%] bottom-[3%] right-0 left-0 m-auto bg-gray-900_99 backdrop-opacity-[0.5] blur-[38.00px] absolute rounded-[132px]" />
                    </div>
                    <Img
                      src="images/img_cup_634x684.png"
                      alt="cup_one"
                      className="justify-center h-[634px] w-full md:h-auto left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full h-full left-0 bottom-0 right-0 top-0 m-auto absolute">
                <div className="flex justify-center p-[39px] sm:p-5 z-[1] bg-gray-100">
                  <div className="flex justify-center w-[54%] md:w-full mb-[199px]">
                    <div className="flex flex-col items-center w-full">
                      <div className="flex self-stretch justify-between items-center gap-5">
                        <a href="#">
                          <Text size="4xl" as="p" className="!text-teal-900 !font-ranade uppercase">
                            CONTACT US
                          </Text>
                        </a>
                        <Img src="images/img_x.svg" alt="x_one" className="h-[48px] w-[48px]" />
                      </div>
                      <Text size="md" as="p" className="mt-5">
                        <>
                          We value your feedback. Whether you have a comment, question, or inquiry, please feel free to
                          fill out
                          <br />
                          the form below.
                        </>
                      </Text>
                      <div className="flex md:flex-col self-stretch justify-between mt-[39px] gap-5">
                        <div className="flex flex-col w-[47%] md:w-full gap-[9px] md:p-5">
                          <Text size="s" as="p">
                            Name
                          </Text>
                          <Input shape="round" name="name" />
                        </div>
                        <div className="flex flex-col w-[47%] md:w-full gap-[9px] md:p-5">
                          <Text size="s" as="p">
                            Email
                          </Text>
                          <Input shape="round" name="email" />
                        </div>
                      </div>
                      <div className="flex flex-col self-stretch mt-[41px] gap-2">
                        <Text size="s" as="p">
                          Message
                        </Text>
                        <TextArea shape="round" name="textarea" />
                      </div>
                      <Button size="sm" className="mt-11 sm:px-5 !text-gray-400 uppercase min-w-[370px] rounded-[32px]">
                        Send Message
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-col justify-center items-center w-full mt-[-136px] gap-8 md:p-5 max-w-[1392px]">
                  <Text as="p" className="self-end w-[52%] md:w-full mb-5 !text-white-A700 !font-normal leading-[26px]">
                    <>
                      As coffee lovers, our need to introduce premium quality coffee to the Indian landscape is fuelled
                      by passion. Committed to our roots, we carefully pick and source superior coffee beans to brew
                      exceptionalism. We are the flag-bearers of tailored experiences that whisper luxury. A good cup by
                      us is your daily dose of good fortune.
                      <br />
                      <br />
                      Owing to the highest standards in our coffee, our beans more often than not score 85+ on the
                      Speciality Coffee Association’s scale. We meticulously fuse the taste factor with a stroke of
                      fortune to spin happiness and wonder. 
                      <br />
                      <br />
                      Our end-to-end procurement process is ethical and it is made sure that each and every individual
                      involved gets rewarded for their hard work. Precision is in our genes, and in our beans. Crafted
                      with technical excellence and balanced out ratios, our beans boast supremacy- better than the
                      rest! 
                      <br />
                      <br />
                      The time you spend consuming coffee is a divine interaction between your senseful delights and
                      inner voyages. We invite you to explore messages that are destined to reach you, just like our cup
                      of coffee that awaits your indulgence. 
                      <br />
                      <br />
                      We are on a momentous journey- and we want you to be a part of it. Our mystical drives within the
                      world of coffee sets us apart from everything you have tasted till date. Rewrite your fortune with
                      us, one cup at a time! 
                      <br />
                    </>
                  </Text>
                  <div className="w-[48%] md:w-full bg-gray-400 rounded-[45px]">
                    <Img
                      src="images/img_adobestock_667306313.png"
                      alt="adobestock_one"
                      className="h-[770px] w-full md:h-auto object-cover rounded-[45px]"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full mt-[137px] mx-auto md:p-5 max-w-[1392px]">
              <div className="flex md:flex-col justify-center items-center">
                <Img
                  src="images/img_beans.png"
                  alt="beans_one"
                  className="w-[33%] md:w-full md:h-auto z-[1] object-cover"
                />
                <div className="ml-[-605px] md:ml-0 flex-1">
                  <div className="flex md:flex-col justify-between items-start gap-5">
                    <Img
                      src="images/img_symbol_gray_400_01_510x510.svg"
                      alt="symbol_three"
                      className="h-[510px] w-[510px] mt-[34px]"
                    />
                    <div className="flex flex-col w-[52%] md:w-full gap-9">
                      <div className="flex">
                        <Text size="4xl" as="p" className="!text-gray-400 !font-ranade uppercase">
                          Our Story
                        </Text>
                      </div>
                      <Text as="p" className="!text-gray-400 !font-normal leading-[26px]">
                        <>
                          Our roots find their calling in the magic of fortune and a cup of hearty coffee. We derive our
                          inspiration from fortune cookies, where every cookie crumble speaks to you. Adopting the
                          concept, we curate a line of coffee products that stir fortune with every sip unique to you.
                          We are the believers of how small moments culminate into serendipitous happenings. 
                          <br />
                          <br />
                          Combining the goodness of fortune with our true love for coffee, Fortune Coffee came into
                          being. Our goal lies in not only serving our customers with the best quality coffee, but also
                          going beyond the usual name tag on your cup. Our personalized message charms are sure to make
                          you believe in magic. Both in the magic of life, and great coffee. 
                          <br />
                          <br />
                          Fortune Coffee offers you a personalized connection alongside fine coffee to teleport you to a
                          world of wonders. Here every cup has a story to tell- what is yours?
                          <br />
                        </>
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-[55px]">
              <div>
                <div>
                  <div className="w-full mx-auto md:p-5 z-[1] max-w-[1392px]">
                    <div className="flex flex-col items-center gap-[73px] md:gap-[54px] sm:gap-9">
                      <Text size="4xl" as="p" className="!text-gray-400 !font-ranade uppercase">
                        Strategic Levers
                      </Text>
                      <div className="flex md:flex-col self-stretch justify-between gap-5">
                        <div className="flex flex-col w-[31%] md:w-full gap-[18px] p-2.5 bg-white-A700 rounded-[15px]">
                          <div className="bg-gray-800 rounded-[10px]">
                            <Img
                              src="images/img_nathan_dumlao_y_253x410.png"
                              alt="nathandumlaoy"
                              className="h-[253px] w-full md:h-auto object-cover rounded-[10px]"
                            />
                          </div>
                          <div className="flex flex-col mb-9">
                            <Text size="xl" as="p" className="!text-teal-900 uppercase !font-medium">
                              USP
                            </Text>
                            <Text size="3xl" as="p" className="mt-1 !text-gray-400">
                              Coffee Lovers Assemble
                            </Text>
                            <Text size="xl" as="p" className="mt-3">
                              For coffee connoisseurs, who can tell apart a great cup of coffee from an average one. 
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col w-[31%] md:w-full gap-[18px] p-2.5 bg-white-A700 rounded-[15px]">
                          <Img
                            src="images/img_nathan_dumlao_y_2.png"
                            alt="nathandumlaoy"
                            className="object-cover rounded-[10px]"
                          />
                          <div className="flex flex-col mb-5">
                            <Text size="xl" as="p" className="!text-teal-900 uppercase !font-medium">
                              Value
                            </Text>
                            <Text size="3xl" as="p" className="mt-1 !text-gray-400">
                              Every Cup Tells a Story  
                            </Text>
                            <Text size="xl" as="p" className="mt-3 text-justify">
                              Our coffee cups are the symbols of class and good luck. Your cup reveals your destiny. A
                              glimpse into your future, or a secret about you- who knows?
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col w-[31%] md:w-full gap-[18px] p-2.5 bg-white-A700 rounded-[20px]">
                          <div className="bg-gray-900_02 rounded-[10px]">
                            <Img
                              src="images/img_nathan_dumlao_y_3.png"
                              alt="nathandumlaoy"
                              className="h-[253px] w-full md:h-auto object-cover rounded-[10px]"
                            />
                          </div>
                          <div className="flex flex-col mb-5">
                            <Text size="xl" as="p" className="!text-teal-900 uppercase !font-medium">
                              Servicing
                            </Text>
                            <Text size="3xl" as="p" className="mt-1 !text-gray-400">
                              Coffee on the Go
                            </Text>
                            <Text size="xl" as="p" className="mt-3 text-justify">
                              Enjoy your daily dose of luck on your way to the office. Our coffee is ready to serve your
                              taste buds in no time. A statement in its might, carry your fortune in style.
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-[-50px]">
                    <div className="flex md:flex-col justify-center items-center">
                      <Img
                        src="images/img_mask_1016x618.png"
                        alt="mask_one"
                        className="w-[29%] md:w-full md:h-auto z-[1] object-cover"
                      />
                      <div className="flex flex-col items-end ml-[-618px] gap-[7px] p-10 md:p-5 md:ml-0 bg-teal-900 flex-1">
                        <Text
                          size="4xl"
                          as="p"
                          className="mr-[499px] md:mr-0 !text-gray-400 !font-ranade uppercase !font-normal"
                        >
                          Coffee Pods
                        </Text>
                        <Text
                          as="p"
                          className="w-[55%] md:w-full mb-[142px] mr-5 md:mr-0 !text-white-A700 text-justify !font-normal leading-[26px]"
                        >
                          <>
                            These pods are not just places to grab a quick coffee; they are designed to encourage
                            interaction and foster community. With no commitment to stay longer than your coffee takes
                            to brew, they offer a no-pressure environment where people can relax, converse, and connect.{" "}
                            <br />
                            <br />
                            The convenience factor is a key aspect of the FC Coffee Pod experience. Unlike traditional
                            cafes where waiting for your order can be time-consuming, these pods are designed for
                            efficiency. Customers can enjoy a swift service, ideal for those tight on time. However, for
                            those who find themselves engrossed in good conversation or in need of a longer break, the
                            option to linger by the pod is always available. <br />
                            <br />
                            In essence, FC&#39;s Coffee Pods are more than just a new way to serve coffee; they are a
                            lifestyle innovation. They blend the need for quick service with the desire for quality and
                            human connection, making them a unique feature in the landscape of modern coffee culture
                          </>
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full mt-[-139px] mx-auto md:p-5 max-w-[1452px]">
                  <div className="flex md:flex-col justify-center items-start">
                    <div className="flex flex-col w-[46%] md:w-full mt-[84px] gap-8 z-[1]">
                      <Text size="4xl" as="p" className="!text-teal-900 !font-ranadevariable !font-light">
                        <span className="text-white-A700 text-2xl">
                          <>
                            Follow us on
                            <br />
                          </>
                        </span>
                        <span className="text-gray-400 font-medium">@fortunecoffee.co</span>
                      </Text>
                      <Text size="2xl" as="p" className="w-[82%] md:w-full !text-white-A700 !font-normal">
                        Walk into our world of fortune. Latest launches, new coffee pods, exciting offers- unpacking
                        magic and more. Tag us and stand a chance at getting featured on our page!
                      </Text>
                    </div>
                    <Img
                      src="images/img_symbol.svg"
                      alt="symbol_five"
                      className="h-[436px] md:w-full md:h-auto ml-[-164px] md:ml-0"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="p-[37px] sm:p-5 bg-teal-900">
              <div className="flex flex-col mb-[9px] gap-[15px]">
                <div className="flex md:flex-col justify-between items-center gap-5">
                  <div className="flex sm:flex-col justify-between items-center w-[44%] md:w-full gap-5 md:p-5">
                    <Img src="images/img_logo_52x247.svg" alt="logo_three" className="h-[52px] sm:w-full sm:h-auto" />
                    <div className="flex flex-col self-end items-start gap-2">
                      <Text size="xs" as="p" className="!text-indigo-50_7e tracking-[0.40px] uppercase opacity-0.4">
                        Address
                      </Text>
                      <Text size="s" as="p" className="!text-indigo-50 !font-normal">
                        EEPS-01, Emerald Estate , Sector 65, Gurugram
                      </Text>
                    </div>
                  </div>
                  <div className="flex self-end justify-between w-[22%] md:w-full gap-5 md:p-5">
                    <Button color="white_A700" shape="round" className="sm:px-5 min-w-[133px]">
                      Contact Us
                    </Button>
                    <Button color="white_A700" shape="round" className="min-w-[133px]">
                      Be a partner
                    </Button>
                  </div>
                </div>
                <div className="h-px bg-gray-400" />
                <div className="flex justify-between gap-5">
                  <Text size="xs" as="p" className="!text-gray-400">
                    © 2024 — Copyright
                  </Text>
                  <div className="flex justify-between w-[13%] gap-5">
                    <Text size="xs" as="p" className="!text-white-A700">
                      Fortune Coffee Pvt. Ltd.
                    </Text>
                    <a href="#">
                      <Text size="xs" as="p" className="!text-white-A700">
                        Privacy
                      </Text>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
