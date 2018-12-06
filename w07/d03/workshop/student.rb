require './reportcard'

class Student
  attr_accessor :name 
  attr_accessor :age
  attr_accessor :reportcard
  def initialize(name, age)
    @name = name
    @age = age
    @reportcard = Reportcard.new
  end
end
