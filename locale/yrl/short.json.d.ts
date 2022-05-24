import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'yrl';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;