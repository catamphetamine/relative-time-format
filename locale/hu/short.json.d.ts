import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'hu';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;