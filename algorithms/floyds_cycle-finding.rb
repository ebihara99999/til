# ref: https://leetcode.com/problems/linked-list-cycle/

# Floyd's Cycle-Finding Algorithm

# Definition for singly-linked list.
# class ListNode
#     attr_accessor :val, :next
#     def initialize(val)
#         @val = val
#         @next = nil
#     end
# end

# @param {ListNode} head
# @return {Boolean}
def has_cycle?(head)
  return false if head.nil?

  fast = head.next
  slow = head

  while fast != slow
    return false if fast.nil? || fast.next.nil?

    fast = fast.next.next
    slow = slow.next
  end
  true
end
