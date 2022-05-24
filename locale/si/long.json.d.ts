import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'si';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;