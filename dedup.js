function winterSaidWeHadToWorkToday(array) {
 
    return Array.from(new Set(array));
    
}

const nums1 = [1, 1, 1, 1];
console.log(`\n\nOutput:\n${winterSaidWeHadToWorkToday(nums1)}\n\n`)

const nums2 = [1, 1, 2, 2, 3, 3];
console.log(`\n\nOutput:\n${winterSaidWeHadToWorkToday(nums2)}\n\n`)

const nums3 = [1, 1, 2, 3, 3, 4];
console.log(`\n\nOutput:\n${winterSaidWeHadToWorkToday(nums3)}\n\n`)

const nums4 = [1, 1];
console.log(`\n\nOutput:\n${winterSaidWeHadToWorkToday(nums4)}\n\n`)