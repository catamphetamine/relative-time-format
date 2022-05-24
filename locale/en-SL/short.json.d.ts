import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-SL';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;