import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'af';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;