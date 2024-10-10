
# Vehicle calls only this class.
class ParkingLot
  def initialize(level)
    @level = level
    @num_of_spots = Level::SPOTS_PER_FLOOR[level - 1]
    @spots_per_row = Level::SPOTS_PER_ROW[level - 1]
  end

  def available_spot_ids(vehicle_type)
    # return spot_ids
  end

  def park(spot_ids)
    # save to db
  end

  def leave(spot_ids)
    # save to db
  end
end

# Describes one parking spot. Has coodinates for the search whether a bus can stop.
class Spot
  def initialize(id, coodinates)
    @id = id
    @coodinates = coodinates
    @available = true
    @reserved = false # lock
  end

  def in
    @reserved = false
    @available = false
    # save to db
  end

  def out
    @reserved = false
    @available = true
    # save to db
  end
end

class Level
  FLOOR = 5
  SPOTS_PER_ROW = [10, 10, 10, 10, 10].freeze
  SPOTS_PER_FLOOR = [20, 20, 10, 20, 10].freeze
end

class Vehicle
  TYPE = %i[bus car motorcycle].freeze
  def initialize(vehicle_type)
    @vehicle_type = vehicle_type
  end

  def stop
    spot_ids = []
    parking_lot = nil
    Level::FLOOR.times do |i|
      parking_lot = ParkingLot.new(i)
      spot_ids = parking_lot.available_spot_ids(@vehicle_type)
      break unless spot_ids.empty?
    end

    parking_lot.park(spot_ids)
  end
end

class Bus < Vehicle
  def initialize
    super(:bus)
  end

  def stop
  end
end

class Car < Vehicle
  def initialize
    super(:car)
  end

  def stop
  end
end

class Motorcycle < Vehicle
  def initialize
    super(:motorcycle)
  end

  def stop
  end
end
