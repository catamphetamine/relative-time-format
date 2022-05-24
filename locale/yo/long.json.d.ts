import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'yo';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;