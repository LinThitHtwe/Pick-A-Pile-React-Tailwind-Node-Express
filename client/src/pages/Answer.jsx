import React from "react";
import one from "../assets/articles/1/1.jpg";
const Answer = () => {
  return (
    <div>
      <div className="grid grid-cols-5 bg-gradient-to-r from-gray-700 to-gray-800 text-white h-screen">
        <div className="p-6 mt-16">
          <img src={one} />
          <a href="#" className="bg-gray-500 mt-4">
            Back
          </a>
        </div>
        <div className="col-span-4 p-20 flex flex-col gap-10 items-center content-center mt-16">
          <h2 className="text-4xl">This is Title</h2>
          <span className="mt-6 leading-8">
            အလုပ်အကိုင်၊စီးပွားရေးနဲ့ပညာရေးမှာ
            ကိုယ်ကြံစည်လိုက်တာလေးတွေအောင်မြင်မယ်အဆင်ပြေမယ်အကျိုးဖြစ်ထွန်းလာတာအထက်လူကြီးဆရာသမားကချီးကျူးတာမျိုးအထိဖြစ်တတ်ပါတယ်\nအာဝဇ္ဇန်းရွှင်သူ၊
            အပြောနဲ့အလုပ်ကိုအဓိကလုပ်နေရသူတွေပိုအဆင်ပြေဖို့များပါတယ်\nပတ်ဝန်းကျင်မှာတော့ကိုယ့်ကိုသဘောမကျသူ၊မနာလိုသူပေါပါမယ်၊
            လူယုံဒုက္ခပေးတတ်ပါတယ်\nငွေကြေး ငွေချေးငွေယူသတိထားလုပ်ပါ
            ကိုယ်စားလျော်ပေးရတာအိတ်စိုက်ပေးလိုက်ရတာရှိတတ်ပါတယ်\nအချစ်ရေး
            RS/Married များ
            သူနဲ့ကိုယ်ကြားဝင်ဖို့ချောင်းနေတဲ့သူတွေပတ်လည်ဝိုင်းနေတတ်ပါတယ်\nတတ်နိုင်သလောက်ကိုယ့်လူကိုယုံကြည်စိတ်ချရလောက်သည်အထိညှိနှိုင်းနားလည်မှုယူထားသင့်ပါတယ်\nSingle
            တွေကတော့ လာပလေးမယ့်သူတွေချည်းကြုံနေရပါဦးမယ်\nကျန်းမာရေး
            ခါးနဲ့ဝမ်းဗိုက်ဂရုစိုက်ပေးပါ
          </span>
        </div>
      </div>
    </div>
  );
};

export default Answer;
