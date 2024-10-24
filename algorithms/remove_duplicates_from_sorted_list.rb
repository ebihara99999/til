# Definition for singly-linked list.
# class ListNode
#     attr_accessor :val, :next
#     def initialize(val = 0, _next = nil)
#         @val = val
#         @next = _next
#     end
# end
# @param {ListNode} head
# @return {ListNode}
def delete_duplicates(head)
  values = []
  return values if head.nil?

  values << head.val
  next_head = head
  return values if next_head.nil?

  loop do
    next_head = next_head.next
    break if next_head.nil?

    values << next_head.val unless values.include? next_head.val
  end
  values.sort
end
