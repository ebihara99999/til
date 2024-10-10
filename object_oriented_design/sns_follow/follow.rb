# frozen_string_literal: true

module Follow
  # User can follow another user.
  class User
    def initialize(**params)
      @id = params[:id]
      @name = params[:name]
    end

    def follow(followee_id)
      FollowRelation.new(@id, followee_id).save
    end
  end

  # includes my_id and followee_id, and saves to db
  class FollowRelation
    def initialize(my_id, followee_id)
      @my_id = my_id
      @followee_id = followee_id
    end

    def save
      # save to db
      puts "Successfully follow user: #{@followee_id}"
    end
  end
end
