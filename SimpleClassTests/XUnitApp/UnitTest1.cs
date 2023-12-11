namespace XUnitApp
{
    public class UnitTest1
    {
        [Fact]
        [Trait("Category A","Group 1")]
        public void Test_Add()
        {
            //Arrange
            int a = 100;
            int b = 200;

            //Act
            var result = Add(a, b);

            //Assert
            Assert.Equal(300,result);

        }
        [Theory]
        //Arrange
        [InlineData(200,400,600)]
        [InlineData(200, - 400, - 200)]
        [Trait("Category B", "Group 2")]
        public void Test_Add_Multiple_Inputs(int a, int b, int expected)
        {
            
            //Act
            var result = Add(a, b);

            //Assert
            Assert.Equal(expected, result);

        }

        public int Add(int n1, int n2)
        {
            return n1 + n2;
        }
    }
}