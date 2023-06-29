"use client";

import { SvgProps } from "@/types";
import { FC } from "react";

const MacIcon: FC<SvgProps> = (props) => {
  return (
    <svg
      width="33"
      height="32"
      viewBox="0 0 33 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect x="0.5" width="32" height="32" rx="16" fill="black" />
      <path
        d="M10.1902 9.32495V12.5H9.50903V8.5376H10.1536L10.1902 9.32495ZM10.051 10.3687L9.73608 10.3577C9.73853 10.0867 9.77393 9.83643 9.84229 9.60693C9.91064 9.375 10.012 9.17358 10.1462 9.00269C10.2805 8.83179 10.4478 8.69995 10.6479 8.60718C10.8481 8.51196 11.0801 8.46436 11.3438 8.46436C11.5293 8.46436 11.7002 8.49121 11.8564 8.54492C12.0127 8.59619 12.1482 8.67798 12.2629 8.79028C12.3777 8.90259 12.4668 9.04663 12.5303 9.22241C12.5938 9.39819 12.6255 9.6106 12.6255 9.85962V12.5H11.948V9.89258C11.948 9.68506 11.9126 9.51904 11.8418 9.39453C11.7734 9.27002 11.6758 9.17969 11.5488 9.12354C11.4219 9.06494 11.2729 9.03564 11.1021 9.03564C10.9019 9.03564 10.7346 9.07104 10.6003 9.14185C10.4661 9.21265 10.3586 9.3103 10.2781 9.43481C10.1975 9.55933 10.1389 9.70215 10.1023 9.86328C10.0681 10.022 10.051 10.1904 10.051 10.3687ZM12.6182 9.99512L12.1641 10.1343C12.1665 9.91699 12.2019 9.70825 12.2703 9.50806C12.3411 9.30786 12.4424 9.12964 12.5742 8.97339C12.7085 8.81714 12.8733 8.69385 13.0686 8.60352C13.2639 8.51074 13.4873 8.46436 13.7388 8.46436C13.9512 8.46436 14.1392 8.49243 14.3027 8.54858C14.4688 8.60474 14.6079 8.69141 14.7202 8.80859C14.835 8.92334 14.9216 9.07104 14.9802 9.25171C15.0388 9.43237 15.0681 9.64722 15.0681 9.89624V12.5H14.387V9.88892C14.387 9.66675 14.3516 9.49463 14.2808 9.37256C14.2124 9.24805 14.1147 9.16138 13.9878 9.11255C13.8633 9.06128 13.7144 9.03564 13.541 9.03564C13.3921 9.03564 13.2603 9.06128 13.1455 9.11255C13.0308 9.16382 12.9343 9.23462 12.8562 9.32495C12.7781 9.41284 12.7183 9.51416 12.6768 9.62891C12.6377 9.74365 12.6182 9.86572 12.6182 9.99512ZM18.4299 11.8225V9.78271C18.4299 9.62646 18.3982 9.49097 18.3347 9.37622C18.2737 9.25903 18.1809 9.1687 18.0564 9.10522C17.9319 9.04175 17.7781 9.01001 17.595 9.01001C17.4241 9.01001 17.2739 9.03931 17.1445 9.0979C17.0176 9.15649 16.9175 9.2334 16.8442 9.32861C16.7734 9.42383 16.738 9.52637 16.738 9.63623H16.0605C16.0605 9.49463 16.0972 9.35425 16.1704 9.21509C16.2437 9.07593 16.3486 8.9502 16.4854 8.83789C16.6245 8.72314 16.7905 8.63281 16.9834 8.56689C17.1787 8.49854 17.396 8.46436 17.6353 8.46436C17.9233 8.46436 18.1772 8.51318 18.397 8.61084C18.6191 8.7085 18.7925 8.8562 18.917 9.05396C19.0439 9.24927 19.1074 9.49463 19.1074 9.79004V11.6357C19.1074 11.7676 19.1184 11.908 19.1404 12.0569C19.1648 12.2058 19.2002 12.334 19.2466 12.4414V12.5H18.5398C18.5056 12.4219 18.4788 12.3181 18.4592 12.1887C18.4397 12.0569 18.4299 11.9348 18.4299 11.8225ZM18.5471 10.0977L18.5544 10.5737H17.8696C17.6768 10.5737 17.5046 10.5896 17.3533 10.6213C17.2019 10.6506 17.075 10.6958 16.9724 10.7568C16.8699 10.8179 16.7917 10.8948 16.738 10.9875C16.6843 11.0779 16.6575 11.1841 16.6575 11.3062C16.6575 11.4307 16.6855 11.5442 16.7417 11.6467C16.7979 11.7493 16.8821 11.8311 16.9944 11.8921C17.1091 11.9507 17.2495 11.98 17.4155 11.98C17.623 11.98 17.8062 11.936 17.9648 11.8481C18.1235 11.7603 18.2493 11.6528 18.342 11.5259C18.4373 11.3989 18.4885 11.2756 18.4958 11.156L18.7852 11.4819C18.7681 11.5845 18.7217 11.698 18.646 11.8225C18.5703 11.947 18.469 12.0667 18.342 12.1814C18.2175 12.2937 18.0686 12.3877 17.8953 12.4634C17.7244 12.5366 17.5315 12.5732 17.3167 12.5732C17.0481 12.5732 16.8125 12.5208 16.6099 12.4158C16.4097 12.3108 16.2534 12.1704 16.1411 11.9946C16.0312 11.8164 15.9763 11.6174 15.9763 11.3977C15.9763 11.1853 16.0178 10.9985 16.1008 10.8374C16.1838 10.6738 16.3035 10.5383 16.4597 10.4309C16.616 10.321 16.804 10.238 17.0237 10.1819C17.2434 10.1257 17.4888 10.0977 17.7598 10.0977H18.5471ZM21.7588 12.0166C21.9199 12.0166 22.0688 11.9836 22.2056 11.9177C22.3423 11.8518 22.4546 11.7615 22.5425 11.6467C22.6304 11.5295 22.6804 11.3965 22.6926 11.2476H23.3372C23.325 11.4819 23.2456 11.7004 23.0991 11.9031C22.9551 12.1033 22.7659 12.2656 22.5315 12.3901C22.2971 12.5122 22.0396 12.5732 21.7588 12.5732C21.4609 12.5732 21.2009 12.5208 20.9788 12.4158C20.759 12.3108 20.5759 12.1667 20.4294 11.9836C20.2854 11.8005 20.1768 11.5906 20.1035 11.3538C20.0327 11.1145 19.9973 10.8618 19.9973 10.5957V10.4419C19.9973 10.1758 20.0327 9.92432 20.1035 9.6875C20.1768 9.44824 20.2854 9.23706 20.4294 9.05396C20.5759 8.87085 20.759 8.72681 20.9788 8.62183C21.2009 8.51685 21.4609 8.46436 21.7588 8.46436C22.0688 8.46436 22.3398 8.52783 22.5718 8.65479C22.8037 8.7793 22.9856 8.9502 23.1174 9.16748C23.2517 9.38232 23.325 9.62646 23.3372 9.8999H22.6926C22.6804 9.73633 22.634 9.58862 22.5535 9.45679C22.4753 9.32495 22.3679 9.21997 22.2312 9.14185C22.0969 9.06128 21.9395 9.021 21.7588 9.021C21.5513 9.021 21.3767 9.0625 21.2351 9.14551C21.0959 9.22607 20.9849 9.33594 20.9019 9.4751C20.8213 9.61182 20.7627 9.7644 20.7261 9.93286C20.6919 10.0989 20.6748 10.2686 20.6748 10.4419V10.5957C20.6748 10.769 20.6919 10.9399 20.7261 11.1084C20.7603 11.2769 20.8176 11.4294 20.8982 11.5662C20.9812 11.7029 21.0923 11.8127 21.2314 11.8958C21.373 11.9763 21.5488 12.0166 21.7588 12.0166Z"
        fill={props.fillColor ||  "white"}
      />
      <path
        d="M16.3916 19.75V20.1406C16.3916 20.6777 16.3216 21.1595 16.1816 21.5859C16.0417 22.0124 15.8415 22.3753 15.5811 22.6748C15.3239 22.9743 15.0146 23.2038 14.6533 23.3633C14.292 23.5195 13.8916 23.5977 13.4521 23.5977C13.016 23.5977 12.6172 23.5195 12.2559 23.3633C11.8978 23.2038 11.5869 22.9743 11.3232 22.6748C11.0596 22.3753 10.8545 22.0124 10.708 21.5859C10.5648 21.1595 10.4932 20.6777 10.4932 20.1406V19.75C10.4932 19.2129 10.5648 18.7327 10.708 18.3096C10.8512 17.8831 11.0531 17.5202 11.3135 17.2207C11.5771 16.918 11.888 16.6885 12.2461 16.5322C12.6074 16.3727 13.0062 16.293 13.4424 16.293C13.8818 16.293 14.2822 16.3727 14.6436 16.5322C15.0049 16.6885 15.3158 16.918 15.5762 17.2207C15.8366 17.5202 16.0368 17.8831 16.1768 18.3096C16.32 18.7327 16.3916 19.2129 16.3916 19.75ZM15.166 20.1406V19.7402C15.166 19.3431 15.127 18.9932 15.0488 18.6904C14.974 18.3844 14.8617 18.1289 14.7119 17.9238C14.5654 17.7155 14.3848 17.5592 14.1699 17.4551C13.9551 17.3477 13.7126 17.2939 13.4424 17.2939C13.1722 17.2939 12.9313 17.3477 12.7197 17.4551C12.5081 17.5592 12.3275 17.7155 12.1777 17.9238C12.0312 18.1289 11.9189 18.3844 11.8408 18.6904C11.7627 18.9932 11.7236 19.3431 11.7236 19.7402V20.1406C11.7236 20.5378 11.7627 20.8893 11.8408 21.1953C11.9189 21.5013 12.0329 21.7601 12.1826 21.9717C12.3356 22.18 12.5179 22.3379 12.7295 22.4453C12.9411 22.5495 13.182 22.6016 13.4521 22.6016C13.7256 22.6016 13.9681 22.5495 14.1797 22.4453C14.3913 22.3379 14.5703 22.18 14.7168 21.9717C14.8633 21.7601 14.974 21.5013 15.0488 21.1953C15.127 20.8893 15.166 20.5378 15.166 20.1406ZM21.3574 21.6689C21.3574 21.5225 21.3346 21.3923 21.2891 21.2783C21.2467 21.1644 21.1702 21.0602 21.0596 20.9658C20.9489 20.8714 20.7926 20.7803 20.5908 20.6924C20.3923 20.6012 20.1383 20.5085 19.8291 20.4141C19.4906 20.3099 19.1781 20.1943 18.8916 20.0674C18.6084 19.9372 18.361 19.7874 18.1494 19.6182C17.9378 19.4456 17.7734 19.2487 17.6562 19.0273C17.5391 18.8027 17.4805 18.5439 17.4805 18.251C17.4805 17.9613 17.5407 17.6976 17.6611 17.46C17.7848 17.2223 17.959 17.0173 18.1836 16.8447C18.4115 16.6689 18.68 16.5339 18.9893 16.4395C19.2985 16.3418 19.6403 16.293 20.0146 16.293C20.542 16.293 20.9961 16.3906 21.377 16.5859C21.7611 16.7812 22.0557 17.0433 22.2607 17.3721C22.4691 17.7008 22.5732 18.0638 22.5732 18.4609H21.3574C21.3574 18.2266 21.307 18.0199 21.2061 17.8408C21.1084 17.6585 20.9587 17.5153 20.7568 17.4111C20.5583 17.307 20.306 17.2549 20 17.2549C19.7103 17.2549 19.4694 17.2988 19.2773 17.3867C19.0853 17.4746 18.9421 17.5934 18.8477 17.7432C18.7533 17.8929 18.7061 18.0622 18.7061 18.251C18.7061 18.3844 18.737 18.5065 18.7988 18.6172C18.8607 18.7246 18.9551 18.8255 19.082 18.9199C19.209 19.0111 19.3685 19.0973 19.5605 19.1787C19.7526 19.2601 19.9788 19.3382 20.2393 19.4131C20.6331 19.5303 20.9766 19.6605 21.2695 19.8037C21.5625 19.9437 21.8066 20.1032 22.002 20.2822C22.1973 20.4613 22.3438 20.6647 22.4414 20.8926C22.5391 21.1172 22.5879 21.3727 22.5879 21.6592C22.5879 21.9587 22.5277 22.2288 22.4072 22.4697C22.2868 22.7074 22.1143 22.9108 21.8896 23.0801C21.6683 23.2461 21.4014 23.3747 21.0889 23.4658C20.7796 23.5537 20.4346 23.5977 20.0537 23.5977C19.7119 23.5977 19.375 23.5521 19.043 23.4609C18.7142 23.3698 18.4147 23.2314 18.1445 23.0459C17.8743 22.8571 17.6595 22.6227 17.5 22.3428C17.3405 22.0596 17.2607 21.7292 17.2607 21.3516H18.4863C18.4863 21.5827 18.5254 21.7796 18.6035 21.9424C18.6849 22.1051 18.7972 22.2386 18.9404 22.3428C19.0837 22.4437 19.2497 22.5186 19.4385 22.5674C19.6305 22.6162 19.8356 22.6406 20.0537 22.6406C20.3402 22.6406 20.5794 22.5999 20.7715 22.5186C20.9668 22.4372 21.1133 22.3232 21.2109 22.1768C21.3086 22.0303 21.3574 21.861 21.3574 21.6689Z"
        fill={props.fillColor ||  "white"}
      />
    </svg>
  );
};
export default MacIcon;