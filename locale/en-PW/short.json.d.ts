import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-PW';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;