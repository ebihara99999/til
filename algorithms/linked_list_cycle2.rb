# https://leetcode.com/problems/linked-list-cycle-ii/
# Definition for singly-linked list.
# class ListNode
#     attr_accessor :val, :next
#     def initialize(val)
#         @val = val
#         @next = nil
#     end
# end

# @param {ListNode} head
# @return {ListNode}
def detectCycle(head)
  node_list = {}
  pos = 0
  tmp = head
  while tmp
    return tmp if node_list[tmp]

    node_list[tmp] = pos
    pos += 1
    tmp = tmp.next
  end
end

# ln = ListNode.new(3)
# ln.next = ln2 = ListNode.new(2)
# ln2.next = ln3 = ListNode.new(0)
# ln3.next = ln4 = ListNode.new(-4)
# ln4.next = ln
#
# hoge = detectCycle(ln)
# p hoge
