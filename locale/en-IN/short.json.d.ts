import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-IN';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;