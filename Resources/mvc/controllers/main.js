/**
 * @fileoverview This file contains the Main controller class, this is the default controller for the app
 * @author Daniel Boorn info@timvc.com
 * @copyright Daniel Boorn info@timvc.com
 * @license MIT License http://www.opensource.org/licenses/mit-license.php
 * @disclaimer THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

/**
 * Main Controller Class
 * @class This is the Main controller class, inherits from Controller. Main.home will be called by TiMVC by default.
 */
var Main = function(){
	 /**
	  * @type Pointer
	  */
	var self = this;
	
	/**
	 * did you know? this class inherits from /mvc/components/controller.js
	 */
	
	/**
	 * place your actions here...
	 */
	this.home = function(r){
		
		var labels = ['events','venues','profile',];
		var items = [];
		for(var i=0;i<labels.length;i++){
			items.push({
				label:labels[i],
				image:self.App.config.resDir + self.App.config.imagePath + "dashboard/" + labels[i] + "_off.png",
				selectedImage:self.App.config.resDir + self.App.config.imagePath + "dashboard/" + labels[i] + "_on.png",
				route:'dashboard/' + labels[i],
				
				request:{name:labels[i]}
			});
		}
		if (Ti.App.Properties.getString('auth_token') === "empty"){
			self.render('login'); 
		} else {
			self.closeNonRootWindows();
			self.render('home',{"items":items});
		}
		//render with /mvc/views/example/dashboard.js, send data to view
		//self.render('dashboard',{"items":items});
	}
	

	
}