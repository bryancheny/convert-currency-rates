class Solution {
public:
    bool canReach(vector<int>& arr, int start) {
        int jumped = 0; 
        return dfs(arr, jumped, start);
    }
    bool dfs (vector<int>& arr, int& jumped, int start) { // record visited indices by writing them to be -1
        if (start >= arr.size() || start < 0 || arr[start] == -1){
            return false;
        } 
        if (arr[start] == 0) return true;
        jumped++;
        int temp = arr[start];
        arr[start] = -1;
        return dfs(arr,jumped,start + temp) || dfs(arr,jumped,start - temp);
    }
};
