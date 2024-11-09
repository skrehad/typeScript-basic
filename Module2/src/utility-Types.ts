{
    //utility types
    // Partial
    // Partial<T> একটি টাইপ তৈরি করে যেটি দেওয়া T টাইপের সব প্রপার্টিকে optional (ঐচ্ছিক) করে দেয়।
    
    interface User {
        name: string;
        age: number;
    }
    
    const updateUser = (user: Partial<User>) => {
        console.log(user);
    };
    
    updateUser({ name: 'Rehad' });
    updateUser({ age: 22 }); 
    updateUser({ name: 'Rehad', age: 22 }); 
    

    // 2. Required
    // Required<T> একটি টাইপ তৈরি করে যেটি দেওয়া T টাইপের সব প্রপার্টিকে required (আবশ্যক) করে দেয়। অর্থাৎ, ঐচ্ছিক প্রপার্টি গুলোও আবশ্যক হয়ে যাবে।
     interface User {
        name: string;
        age2?: number;
    }
    
    const updateUser2 = (user: Required<User>) => {
        console.log(user);
    };
    
    updateUser({ name: 'Rehad', age: 22 }); // সঠিক
    
    // 3. Readonly
    // Readonly<T> একটি টাইপ তৈরি করে, যা একটি অবজেক্টের সব প্রপার্টি immutable (অপরিবর্তনীয়) করে দেয়। একবার সেট করা হলে, এগুলোর মান পরিবর্তন করা যাবে না।
    
    interface User {
        name: string;
        age: number;
    }
    
    const user: Readonly<User> = {
        name: 'Rehad',
        age: 22,
        email:'rehadhasan664@gmail.com'
    };
    
    
    // 4. Pick
    // Pick<T, K> একটি টাইপ তৈরি করে, যেটি T টাইপের মধ্যে থেকে কেবলমাত্র কিছু নির্দিষ্ট প্রপার্টি K নির্বাচন করে।
    interface User {
        name: string;
        age: number;
        email: string;
    }
    
    const user2: Pick<User, 'name' | 'email'> = {
        name: 'Rehad',
        email: 'rehad@example.com'
    };
    
    // 5. Omit
    // Omit<T, K> একটি টাইপ তৈরি করে, যেটি T টাইপ থেকে কিছু নির্দিষ্ট প্রপার্টি K বাদ দিয়ে একটি নতুন টাইপ তৈরি করে।
    interface User {
        name: string;
        age: number;
        email: string;
    }
    
    const user3: Omit<User, 'age'> = {
        name: 'Rehad',
        email: 'rehad@example.com'
    };
    
    // 6. Record
    // Record<K, T> একটি টাইপ তৈরি করে, যেখানে K হচ্ছে key এবং T হচ্ছে value টাইপ। এটি দিয়ে আমরা একটি অবজেক্ট টাইপ তৈরি করতে পারি, যেটি নির্দিষ্ট কীগুলোর জন্য নির্দিষ্ট টাইপের মান ধারণ করে।
    type Role = 'admin' | 'user' | 'guest';
    
    const userRoles: Record<Role, string> = {
        admin: 'Has full access',
        user: 'Has limited access',
        guest: 'Has guest access'
    };
    
    console.log(userRoles.admin); // Output: Has full access
    
    // 7. Exclude
    // Exclude<T, U> একটি টাইপ তৈরি করে, যেটি T থেকে U টাইপের উপাদানগুলো বাদ দিয়ে নতুন একটি টাইপ তৈরি করে।
    type Fruit = 'apple' | 'banana' | 'cherry';
    type TropicalFruit = Exclude<Fruit, 'banana'>;
    
    const fruit: TropicalFruit = 'apple';
    
    // 8. Extract
    // Extract<T, U> একটি টাইপ তৈরি করে, যেটি T এবং U টাইপের যে উপাদানগুলো মিল আছে, কেবলমাত্র সেগুলোই রাখে।    
    type Fruit2 = 'apple' | 'banana' | 'cherry';
    type Citrus = 'orange' | 'lemon';
    
    type Extracted = Extract<Fruit2, Citrus>;    
    const citrus: Extracted = 'banana'; 
  }