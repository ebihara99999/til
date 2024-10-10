require_relative '../sns_follow/follow'

describe "Follow::User" do
  describe "#follow" do
    it "follows another user" do
      user = Follow::User.new(id: 1, name: "Alice")
      expect { user.follow(2) }.to output("Successfully follow user: 2\n").to_stdout
    end
  end
end
