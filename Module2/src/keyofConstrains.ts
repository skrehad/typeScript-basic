function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

// getProperty function-এ আমরা দুটি generic টাইপ T এবং K ব্যবহার করেছি।
// K extends keyof T দ্বারা আমরা K-কে T টাইপের প্রপার্টি কীগুলোর মধ্যে সীমাবদ্ধ করেছি।
// অর্থাৎ K শুধুমাত্র সেই কী হতে পারবে, যা T অবজেক্টের প্রপার্টি হিসেবে আছে।
// T[K] মানে হলো সেই কী (key) এর সাথে সম্পর্কিত মানের টাইপ।

const developer = {
  name: "Rehad",
  id: 1,
  skills: "TypeScript",
};

// ঠিক আছে, কারণ 'name' হল developer অবজেক্টের একটি বৈধ প্রপার্টি কী
console.log(getProperty(developer, "name")); // Output: 'Rehad'

// ঠিক আছে, কারণ 'id' developer অবজেক্টের একটি বৈধ প্রপার্টি কী
console.log(getProperty(developer, "id")); // Output: 1

// ভুল হবে, কারণ 'age' প্রপার্টি developer অবজেক্টে নেই
// console.log(getProperty(developer, 'age')); // TypeScript error
