import { Component, OnInit } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";

@Component({
    selector: "app-fitness-trend-welcome-dialog",
    template: `
        <h2 mat-dialog-title>Notice about "Estimated Fitness Trend" </h2>
        <mat-dialog-content class="mat-body-1">

            <div>
                If you don't own or sometimes forgot your sensors, your fitness trend can be nevertheless estimated.
                A "typical" iPhone or Android mobile user who runs the strava mobile app can access the fitness
                trend feature without buying any external sensors 👍. Nevertheless sensors are highly recommended if you need a
                more accurate trend.
            </div>

            <div>
                Since the fitness trend is calculated on activities' stress scores, this implies that stress scores of your
                activities without sensors have to be estimated too. Currently only cycling, running and swimming activities can
                have their stress scores estimated.
            </div>

            <div>
                Estimating stress scores on cycling and running implies the below prerequisites:
                <ul>
                    <li>
                        Estimated <i>Cycling Power Stress Score (PSS)</i>:
                        <ul>
                            <li>Your <i>Cycling Functional Threshold Power (FTP)</i> must be set in <a
                                [routerLink]="'/athleteSettings'" (click)="dialogRef.close()">dated athlete
                                settings</a>. A wrong ftp can cause too big/low PSS scores on activities.
                            </li>
                            <li>The power meter data toggle
                                <mat-icon fontSet="material-icons-outlined" [style.vertical-align]="'bottom'">flash_on</mat-icon>
                                must be switched <strong>ON</strong> (on screen behind).
                            </li>
                            <li>
                                Your weight must be set in your <a href="https://www.strava.com/settings/profile"
                                                                   target="_blank">strava.com profile</a> allowing strava to
                                estimate power data on your next cycling activities
                                (required to compute <i>PSS</i>).
                            </li>
                            <li>
                                Your cycling activities must have correct elevation data. Read Strava elevation <a
								href="https://support.strava.com/hc/en-us/articles/115001294564-Elevation-on-Strava-FAQs"
								target="_blank">FAQ</a> and <a
								href="https://support.strava.com/hc/en-us/articles/216919447-Elevation-for-Your-Activity"
								target="_blank">Notes</a> to fix your activities if needed. A "Clear and re-sync
								activities" can be required after any fix.
							</li>
						</ul>
					</li>
					<li>
						<i>Estimated Running Stress Score (RSS)</i>:
						<ul>
							<li>Your <i>Running Functional Threshold Pace</i> must be set in <a
								[routerLink]="'/athleteSettings'" (click)="dialogRef.close()">dated athlete
								settings</a>.
							</li>
						</ul>
					</li>
				</ul>
			</div>
		</mat-dialog-content>
		<mat-dialog-actions>
			<div fxLayout="column" fxLayoutAlign="start start">
				<div fxFlex>
					<mat-checkbox [(ngModel)]="hideMessage">
						Don't show this message again
					</mat-checkbox>
				</div>
				<div fxFlex>
					<button mat-stroked-button mat-dialog-close color="primary" (click)="onGotIt()">Got it</button>
				</div>
			</div>
		</mat-dialog-actions>
	`,
    styles: [`
		div {
			padding-top: 10px;
			padding-bottom: 10px;
		}

		ul {
			list-style-type: square;
		}

		li, ul > li {
			margin-bottom: 10px;
		}
	`]
})
export class FitnessTrendWelcomeDialogComponent implements OnInit {

    public static readonly LS_HIDE_FITNESS_WELCOME_DIALOG: string = "fitnessTrend_hideWelcomeInfoDialog"; // TODO To be removed in future

    public static readonly MAX_WIDTH: string = "40%";
    public static readonly MIN_WIDTH: string = "60%";

    public hideMessage: boolean;

    constructor(public dialogRef: MatDialogRef<FitnessTrendWelcomeDialogComponent>) {
    }

    public ngOnInit(): void {
    }

    public onGotIt(): void {
        if (this.hideMessage) {
            localStorage.setItem(FitnessTrendWelcomeDialogComponent.LS_HIDE_FITNESS_WELCOME_DIALOG, "true");
        }
        this.dialogRef.close();
    }
}
